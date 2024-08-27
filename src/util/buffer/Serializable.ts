import BufferWriter from './BufferWriter';
import BufferReader from './BufferReader';
import TypeHandler from './TypeHandler';

class Serializable {
    private schema: any[];
    private nestedSerializables: { [key: string]: Serializable };
    /**
   * 构造 Serializable 实例。
   * @param {Object[]} schema - 定义数据结构的 schema 数组。
   */
    constructor(schema:object[]) {
        this.schema = schema;
        this.nestedSerializables = {};
        this.schema.forEach(({ name, type, elementType, schema: nestedSchema }) => {
            if ((type === 'object' || type === 'Type' || (type === 'array' && (elementType === 'object' || elementType === 'Type')) || type === 'map') && nestedSchema) {
                this.nestedSerializables[name] = new Serializable(nestedSchema);
            }
        });
    }
     /**
     * 序列化数据。
     * @param {Object} data - 要序列化的数据。
     * @returns {Buffer} 序列化后的 Buffer。
     */

     ToMap(needMap: any): Map<any, any> {
        if (!Array.isArray(needMap)) {
            // 如果不是数组，直接返回
            return new Map(Object.entries(needMap));
        } else {
            // 处理数组，转换为Map
            return this.arrayToMap(needMap);
        }
    }
    
    arrayToMap(array: any[]): Map<any, any> {
        const map = new Map();
        array.forEach((value) => {
            if (Array.isArray(value)) {
                // 如果数组元素是数组，使用数组的两个元素作为键值对
                if (value.length === 2) {
                    map.set(value[0], value[1]);
                } else {
                    throw new Error('Array elements must be arrays with exactly two elements.');
                }
            } else if (typeof value === 'object' && value !== null) {
                // 如果数组元素是对象，使用对象的键值对
                for (const [key, val] of Object.entries(value)) {
                    map.set(key, val);
                }
            } else {
                // 如果数组元素不是数组也不是对象，抛出错误
                throw new Error('Array elements must be arrays or objects.');
            }
        });
        return map;
    }
    
    serialize(data:object) {
        const writer = new BufferWriter();
        this.schema.forEach(({ name, type, elementType, keyType, valueType }) => {
            const value = data[name];
            if (!TypeHandler.handlers[type]) {
                throw new Error(`Unsupported type: ${type}`);
            } else if (type === 'Type' && this.nestedSerializables[name]) {
                const serializedValue = this.nestedSerializables[name].serialize(value);
                writer.writeBuffer(serializedValue);
            } else if (type === 'map') {
                //if (this.isArray2D(value)==false) {
                    
                    let mapvalue=this.ToMap(value);
                    writer.writeCompactInt32(mapvalue.size);

                    mapvalue.forEach((val, key) => {
                        TypeHandler.handlers[keyType].write(writer, key);
                        if (valueType === 'object' || valueType === 'Type' && this.nestedSerializables[name]) {
                            
                            const serializedValue = this.nestedSerializables[name].serialize(val);
                            writer.writeBuffer(serializedValue);
                        } else {
                            TypeHandler.handlers[valueType].write(writer, val);
                        }
                    });
                //}
            } else if (type === 'array') {
                if (Array.isArray(value)) {
                    writer.writeCompactInt32(value.length);
                    value.forEach(item => {
                        if ((elementType === 'object' || elementType === 'Type') && this.nestedSerializables[name]) {
                            const serializedItem = this.nestedSerializables[name].serialize(item);
                            if (Buffer.isBuffer(serializedItem) && serializedItem.length) {
                                writer.writeBuffer(serializedItem);
                            }
                        } else {
                            TypeHandler.handlers[elementType].write(writer, item);
                        }
                    });
                } else {
                    writer.writeCompactInt32(0);
                }
            } else if (type === 'object' && this.nestedSerializables[name]) {
                const serializedItem = this.nestedSerializables[name].serialize(value);
                writer.writeBuffer(serializedItem);
            } else {
                TypeHandler.handlers[type].write(writer, value);
            }
        });
        return writer.getBuffer();
    }
    /**
     * 反序列化数据。
     * @param {Buffer} buffer - 要反序列化的数据 Buffer。
     * @returns {Object} 反序列化后的数据对象。
     */
    deserialize(buffer:Buffer) {
        const reader:any = new BufferReader(buffer);
        const result:object = {};
        this.schema.forEach(({ name, type, elementType, keyType, valueType }) => {
            if (!TypeHandler.handlers[type]) {
                throw new Error(`Unsupported type: ${type}`);
            } else if (type === 'Type' && this.nestedSerializables[name]) {
                const valueBuffer = reader.readBuffer();
                const value = this.nestedSerializables[name].deserialize(valueBuffer);
                result[name] = value;
            } else if (type === 'map') {
                
                const mapLength = reader.readCompactInt32();
                const mapObject = new Array();
                for (let i = 0; i < mapLength; i++) {
                    const key = TypeHandler.handlers[keyType].read(reader);
                    let value;
                    if (valueType === 'object' || valueType === 'Type' && this.nestedSerializables[name]) {
                        const valueBuffer = reader.readBuffer();
                        value = this.nestedSerializables[name].deserialize(valueBuffer);
                    } else {
                        value = TypeHandler.handlers[valueType].read(reader);
                    }
                    mapObject.push([key, value]);
                }
                result[name] = mapObject;
            } else if (type === 'array') {
                const items:any[] = [];
                const arrayLength = reader.readCompactInt32();
                for (let i = 0; i < arrayLength; i++) {
                    if ((elementType === 'object' || elementType === 'Type') && this.nestedSerializables[name]) {
                        const nestedBuffer = reader.readBuffer();
                        items.push(this.nestedSerializables[name].deserialize(nestedBuffer));
                    } else {
                        items.push(TypeHandler.handlers[elementType].read(reader));
                    }
                }
                result[name] = items;
            } else if (type === 'object' && this.nestedSerializables[name]) {
                const nestedBuffer = reader.readBuffer();
                result[name] = this.nestedSerializables[name].deserialize(nestedBuffer);
            } else {
                result[name] = TypeHandler.handlers[type].read(reader);
            }
        });
        return result;
    }
}

export default Serializable;