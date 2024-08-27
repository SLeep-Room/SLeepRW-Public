// BufferWriter.ts
import TypeHandler from './TypeHandler';

/**
 * BufferWriter 类 - 用于将数据序列化到 Buffer。
 */
class BufferWriter {
  /**
   * 缓冲区，用于存储序列化后的数据。
   */
  buffer: Buffer;

  /**
   * 当前写入的偏移量。
   */
  offset: number;

  /**
   * 构造函数，初始化 BufferWriter 实例。
   */
  constructor() {
    this.buffer = Buffer.alloc(1024); // 初始分配一个缓冲区
    this.offset = 0; // 当前写入的偏移量
  }

  /**
   * 确保缓冲区有足够的容量。
   * @param {number} length - 需要的容量。
   */
  ensureCapacity(length: number): void {
    if (this.offset + length > this.buffer.length) {
      let newLength = this.buffer.length;
      while (newLength < this.offset + length) {
        newLength *= 2; // 双倍扩容
      }
      const newBuffer = Buffer.alloc(newLength);
      this.buffer.copy(newBuffer, 0, 0, this.offset);
      this.buffer = newBuffer;
    }
  }

  /**
   * 写入一个字节到缓冲区。
   * @param {number} byte - 要写入的字节。
   */
  writeByte(byte: number): void {
    this.ensureCapacity(1);
    this.buffer[this.offset++] = byte & 0xFF; // 确保写入的是一个字节
  }

  /**
   * 将另一个 Buffer 数据写入到缓冲区。
   * @param {Buffer} data - 要写入的 Buffer 数据。
   */
  writeBuffer(data: Buffer): void {
    this.ensureCapacity(data.length);
    data.copy(this.buffer, this.offset);
    this.offset += data.length;
  }

  /**
   * 写入一个紧凑型的 32 位整数。
   * @param {number} value - 要写入的值。
   */
  writeCompactInt32(value: number): void {
    value = value >>> 0; // 确保为无符号整数
    while (value >= 0x80) {
      this.writeByte((value & 0x7F) | 0x80);
      value >>>= 7;
    }
    this.writeByte(value & 0x7F);
  }
  
  /**
   * 写入一个 32 位整数。
   * @param {number} value - 要写入的值。
   */
  writeInt16(value: number): void {
    this.ensureCapacity(2);
    this.buffer.writeInt16BE(value, this.offset);
    this.offset += 2;
  }

  writeInt32(value: number): void {
    this.ensureCapacity(4);
    this.buffer.writeInt32BE(value, this.offset);
    this.offset += 4;
  }

  writeFloat32(value: number): void {
    this.ensureCapacity(4);
    this.buffer.writeFloatBE(value, this.offset);
    this.offset += 4;
  }

  writeInt64(value: bigint): void {
    this.ensureCapacity(8);
    this.buffer.writeBigInt64BE(BigInt(value), this.offset);
    this.offset += 8;
  }

  writeString(value: string): void {
    const strBuf = Buffer.from(value, 'utf8');
    const length = strBuf.length;
    this.writeCompactInt32(length); // 使用紧凑格式写入长度
    strBuf.copy(this.buffer, this.offset);
    this.offset += length;
  }

  /**
   * 写入一个可序列化对象。
   * @param {Object} serializable - 可序列化的对象。
   */
  writeSerializable(serializable: { serialize: (writer: BufferWriter) => void }): void {
    const startOffset = this.offset;
    this.offset += 4; // 预留长度字段的空间
    serializable.serialize(this); // 序列化对象
    const endOffset = this.offset;
    const length = endOffset - startOffset - 4;
    this.buffer.writeInt32BE(length, startOffset); // 在起始位置写入长度
  }

  /**
   * 获取当前写入的 Buffer。
   * @returns {Buffer} 已经写入数据部分的 Buffer。
   */
  getBuffer(): Buffer {
    return this.buffer.slice(0, this.offset); // 返回已经写入数据部分的副本
  }

  concat(value: Buffer): void {
    const newBuffer = Buffer.concat([this.getBuffer(), value]);
    this.buffer = newBuffer;
    this.offset = newBuffer.length;
  }
}

export default BufferWriter;