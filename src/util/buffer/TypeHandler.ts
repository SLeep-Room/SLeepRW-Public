import BufferWriter from "./BufferWriter";
import BufferReader from "./BufferReader";


function ToMap(needMap: any) {
    if (!Array.isArray(needMap)){
        //console.log(needMap)
        return needMap;
    }else{
        return this.arrayToMap(needMap)
    }
}

function arrayToMap(array: any[]): Map<any, any> {
    const map = new Map();
    array.forEach((value:any) => {
        map.set(value[0],value[1]);
    });
    return map;

}
// TypeHandler.ts
class TypeHandler {
    /**
     * 定义一个类型处理器的映射表，用于根据不同类型进行序列化和反序列化。
     */
    static handlers = {
        // 数组类型的序列化与反序列化处理器
        'array': {
            write: (writer:any, array:any, elementTypeDescriptor:any) => {
                writer.writeCompactInt32(array.length);
                array.forEach(element => {
                    const handler = TypeHandler.handlers[elementTypeDescriptor.type || elementTypeDescriptor];
                    if (handler) {
                        if (elementTypeDescriptor.type) {
                            handler.write(writer, element, elementTypeDescriptor.elementType || elementTypeDescriptor.schema);
                        } else {
                            handler.write(writer, element);
                        }
                    } else {
                        throw new Error(`Unsupported element type: ${elementTypeDescriptor.type || elementTypeDescriptor}`);
                    }
                });
            },
            read: (reader:any, elementTypeDescriptor:any) => {
                const length = reader.readCompactUInt32();
                const array = new Array(length);
                for (let i = 0; i < length; i++) {
                    const handler = TypeHandler.handlers[elementTypeDescriptor.type || elementTypeDescriptor];
                    if (handler) {
                        if (elementTypeDescriptor.type) {
                            array[i] = handler.read(reader, elementTypeDescriptor.elementType || elementTypeDescriptor.schema);
                        } else {
                            array[i] = handler.read(reader);
                        }
                    } else {
                        throw new Error(`Unsupported element type: ${elementTypeDescriptor.type || elementTypeDescriptor}`);
                    }
                }
                return array;
            }
        },
        'string': {
            write: (writer: BufferWriter, value: any) => {
                const strBuf = Buffer.from(value, 'utf8');
                const length = strBuf.length;
                writer.writeCompactInt32(length); // 使用紧凑格式写入长度
                strBuf.copy(writer.buffer, writer.offset);
                writer.offset += length;
              },
              read: (reader: BufferReader) => {
                const length = reader.readCompactUInt32(); // 使用紧凑格式读取长度
                const value = reader.buffer.toString('utf8', reader.offset, reader.offset + length);
                reader.offset += length;
                return value;
              }
        },
        'byte': {
            write: (writer:any, value:any) => {
                writer.ensureCapacity(1);
                writer.buffer[writer.offset] = value;
                writer.offset += 1;
            },
            read: (reader:any) => {
                const value = reader.buffer[reader.offset];
                reader.offset += 1;
                return value;
            }
        },
        'int16': {
            write: (writer:any, value:any) => {
                writer.ensureCapacity(2);
                writer.buffer.writeInt16BE(value, writer.offset);
                writer.offset += 2;
            },
            read: (reader:any) => {
                const value = reader.buffer.readInt16BE(reader.offset);
                reader.offset += 2;
                return value;
            }
        },
        'int32': {
            write: (writer:any, value:any) => {

                writer.ensureCapacity(4);
                writer.buffer.writeInt32BE(value, writer.offset);
                writer.offset += 4;

            },
            read: (reader:any) => {
                const value = reader.buffer.readInt32BE(reader.offset);
                reader.offset += 4;
                return value;
            }
        },
        'int64': {
            write: (writer:any, value:any) => {
                writer.ensureCapacity(8);
                writer.buffer.writeBigInt64BE(BigInt(value), writer.offset);
                writer.offset += 8;
            },
            read: (reader:any) => {
                const value = reader.buffer.readBigInt64BE(reader.offset);
                reader.offset += 8;
                return value;
            }
        },
        'float32': {
            write: (writer:any, value:any) => {
                writer.ensureCapacity(4);
                writer.buffer.writeFloatBE(value, writer.offset);
                writer.offset += 4;
            },
            read: (reader:any) => {
                const value = reader.buffer.readFloatBE(reader.offset);
                reader.offset += 4;
                return value;
            }
        },
        'float64': {
            write: (writer:any, value:any) => {
                writer.ensureCapacity(8);
                writer.buffer.writeDoubleBE(value, writer.offset);
                writer.offset += 8;
            },
            read: (reader:any) => {
                const value = reader.buffer.readDoubleBE(reader.offset);
                reader.offset += 8;
                return value;
            }
        },
        'map':{
            write: (writer, map, keyTypeDescriptor, valueTypeDescriptor) => {
                writer.writeCompactInt32(map.size);
                //const mapvalue=ToMap(map)
                map.forEach((value, key) => {
                    const keyHandler = TypeHandler.handlers[keyTypeDescriptor.type || keyTypeDescriptor];
                    const valueHandler = TypeHandler.handlers[valueTypeDescriptor.type || valueTypeDescriptor];
                    if (keyHandler && valueHandler) {
                        // 写入转换后的key
                        keyHandler.write(writer, key, keyTypeDescriptor.elementType || keyTypeDescriptor.schema);
                        // 写入value
                        valueHandler.write(writer, value, valueTypeDescriptor.elementType || valueTypeDescriptor.schema);
                    } else {
                        throw new Error(`Unsupported map key/value type: ${keyTypeDescriptor.type || valueTypeDescriptor.type}`);
                    }
                });
            },
            read: (reader, keyTypeDescriptor, valueTypeDescriptor) => {
                const size = reader.readCompactInt32();
                const map = new Map();
                for (let i = 0; i < size; i++) {
                    const keyHandler = TypeHandler.handlers[keyTypeDescriptor.type || keyTypeDescriptor];
                    const valueHandler = TypeHandler.handlers[valueTypeDescriptor.type || valueTypeDescriptor];
                    if (keyHandler && valueHandler) {
                        // 读取并反序列化key
                        let key = keyHandler.read(reader, keyTypeDescriptor.elementType || keyTypeDescriptor.schema);
            
                        // 读取并反序列化value
                        const value = valueHandler.read(reader, valueTypeDescriptor.elementType || valueTypeDescriptor.schema);
                        map.set(key, value);
                    } else {
                        throw new Error(`Unsupported map key/value type: ${keyTypeDescriptor.type || valueTypeDescriptor.type}`);
                    }
                }
                return map;
            },
        },
        'object':{
            write: (writer:any, object:any, schema:any) => {
                // 首先写入对象中字段的数量
                writer.writeCompactInt32(Object.keys(schema).length);
                // 遍历对象schema中的每个字段
                Object.keys(schema).forEach(key => {
                    const field = schema[key];
                    const value = object[key];
                    // 写入字段名
                    writer.writeString(key);
                    if (field.type === 'object') {
                        // 如果字段是对象，递归序列化
                        TypeHandler.handlers['object'].write(writer, value, field.schema);
                    } else if (field.type === 'array') {
                        // 如果字段是数组，处理数组的序列化，包括可能的嵌套
                        TypeHandler.handlers['array'].write(writer, value, field.elementType);
                    } else {
                        // 处理基础类型
                        const handler = TypeHandler.handlers[field.type];
                        if (handler) {
                            handler.write(writer, value);
                        } else {
                            throw new Error(`Unsupported type: ${field.type}`);
                        }
                    }
                });
            },
            read: (reader:any, schema:any) => {
                const object = {};
                // 首先读取对象中字段的数量
                const fieldCount = reader.readCompactUInt32();
                // 遍历读取每个字段
                for (let i = 0; i < fieldCount; i++) {
                    // 读取字段名
                    const key = reader.readString();
                    const field = schema[key];
                    if (!field) {
                        throw new Error(`Field ${key} not found in schema`);
                    }
                    if (field.type === 'object') {
                        // 递归反序列化嵌套对象
                        object[key] = TypeHandler.handlers['object'].read(reader, field.schema);
                    } else if (field.type === 'array') {
                        // 反序列化数组，包括嵌套
                        object[key] = TypeHandler.handlers['array'].read(reader, field.elementType);
                    } else {
                        // 处理基础类型
                        const handler = TypeHandler.handlers[field.type];
                        if (handler) {
                            object[key] = handler.read(reader);
                        } else {
                            throw new Error(`Unsupported type: ${field.type}`);
                        }
                    }
                }
                return object;
            }
        },
        'Type': {
            write: (writer, object, schema) => {
                schema.forEach(fieldSchema => {
                    const value = object[fieldSchema.name];
                    const handler = TypeHandler.handlers[fieldSchema.type];
                    if (handler) {
                        if (fieldSchema.type === 'map') {
                            handler.write(writer, value, fieldSchema.keyType, fieldSchema.valueType);
                        } else if (fieldSchema.type === 'object' || fieldSchema.type === 'array') {
                            handler.write(writer, value, fieldSchema.schema);
                        } else {
                            handler.write(writer, value);
                        }
                    } else {
                        throw new Error(`Unsupported type: ${fieldSchema.type}`);
                    }
                });
            },
            read: (reader, schema) => {
                const object = {};
                schema.forEach(fieldSchema => {
                    const handler = TypeHandler.handlers[fieldSchema.type];
                    if (handler) {
                        if (fieldSchema.type === 'map') {
                            object[fieldSchema.name] = handler.read(reader, fieldSchema.keyType, fieldSchema.valueType);
                        } else if (fieldSchema.type === 'object' || fieldSchema.type === 'array') {
                            object[fieldSchema.name] = handler.read(reader, fieldSchema.schema);
                        } else {
                            object[fieldSchema.name] = handler.read(reader);
                        }
                    } else {
                        throw new Error(`Unsupported type: ${fieldSchema.type}`);
                    }
                });
                return object;
            }
        },
    };

}

export default TypeHandler;