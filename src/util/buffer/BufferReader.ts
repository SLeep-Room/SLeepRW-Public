// BufferReader.ts
import TypeHandler from './TypeHandler';

/**
 * BufferReader 类 - 用于从 Buffer 中读取数据。
 */
class BufferReader {
  /**
   * 要读取的原始 Buffer 数据。
   */
  buffer: Buffer;

  /**
   * 当前读取的偏移量。
   */
  offset: number;

  /**
   * 构造函数，初始化 BufferReader 实例。
   * @param {Buffer} buffer - 要读取的 Buffer 数据。
   */
  constructor(buffer: Buffer) {
    this.buffer = buffer;
    this.offset = 0;
  }

  /**
   * 读取一个字节。
   * @returns {number} 读取的字节。
   */
  readByte(): number {
    this._ensureRead(1);
    return this.buffer[this.offset++];
  }

  /**
   * 根据指定长度读取 Buffer。
   * @param {number} length - 要读取的长度。
   * @returns {Buffer} 读取的 Buffer 数据段。
   */
  readBuffer(length: number): Buffer {
    this._ensureRead(length);
    const result = this.buffer.slice(this.offset, this.offset + length);
    this.offset += length;
    return result;
  }

  readInt16(): number {
    this._ensureRead(2);
    const value = this.buffer.readInt16BE(this.offset);
    this.offset += 2;
    return value;
  }

  readInt32(): number {
    this._ensureRead(4);
    const value = this.buffer.readInt32BE(this.offset);
    this.offset += 4;
    return value;
  }

  readFloat32(): number {
    this._ensureRead(4);
    const value = this.buffer.readFloatBE(this.offset);
    this.offset += 4;
    return value;
  }

  readInt64(): bigint {
    this._ensureRead(8);
    const value = this.buffer.readBigInt64BE(this.offset);
    this.offset += 8;
    return value;
  }

  readString(): string {
    const length = this.readCompactUInt32();
    const value = this.buffer.toString('utf8', this.offset, this.offset + length);
    this.offset = this.offset + length;
    return value;
  }

  /**
   * 窥视当前位置的字节，不增加偏移量。
   * @returns {number} 当前位置的字节。
   */
  peekByte(): number {
    this._ensureRead(1);
    return this.buffer[this.offset]; // 返回当前位置的字节但不增加offset
  }


  /**
   * 确保可以安全读取指定长度的数据。
   * @param {number} length - 要读取的长度。
   * @private
   */
  private _ensureRead(length: number): void {
    if (this.offset + length > this.buffer.length) {
      throw new Error('Attempt to read beyond buffer length');
    }
  }

  /**
   * 读取紧凑型的无符号 32 位整数。
   * @returns {number} 读取的紧凑型无符号 32 位整数。
   */
  readCompactUInt32(): number {
    let result = 0;
    let shift = 0;
    while (true) {
      const byte = this.readByte();
      result |= (byte & 0x7F) << shift;
      if ((byte & 0x80) === 0) {
        break; // 检查是否是最后一个字节
      }
      shift += 7;
      if (shift > 28) {
        throw new Error('Varint too long, integer overflow');
      }
    }
    return result;
  }

  /**
   * 读取紧凑型的有符号 32 位整数。
   * @returns {number} 读取的紧凑型有符号 32 位整数。
   */
  readCompactInt32(): number {
    // 实现与 readCompactUInt32 相同，但可能需要 ZigZag 解码，具体取决于协议
    let result = 0;
    let shift = 0;
    while (true) {
      const byte = this.readByte();
      result |= (byte & 0x7F) << shift;
      if ((byte & 0x80) === 0) {
        break;
      }
      shift += 7;
      if (shift > 28) {
        throw new Error('Varint too long, integer overflow');
      }
    }
    // 如果需要 ZigZag 解码，请在这里添加
    return result;
  }

  /**
   * 根据类型读取数据。
   * @param {string} type - 数据类型。
   * @returns 读取的数据。
   */
  read(type: string): any {
    const handler = TypeHandler.handlers[type];
    if (!handler) {
      throw new Error(`Unsupported type: ${type}`);
    }
    return handler.read(this);
  }

  getBuffer() {
    return this.buffer.slice(0, this.offset); // 返回已经写入数据部分的副本
}

}

export default BufferReader;