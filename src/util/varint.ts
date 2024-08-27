export class Varint {
    static decode(data: Buffer, start_index: number) {
        let result = 0;
        let shift = 0;
        for (let index = start_index; index < data.length; index++) {
          const byte = data[index];
          result |= (byte & 0x7F) << shift;
          if ((byte & 0x80) === 0) {
            return [result, index];
          }
          shift += 7;
        }
        throw new Error('Varint is too long');
      }
  
    static encode(value: number){
        const varintBytes: number[] = [];
        do {
          let byte = value & 0x7f;  // 获取最低的7位
          value >>= 7;  // 右移7位
          if (value !== 0) {
            byte |= 0x80;  // 如果还有剩余的位，将第8位设置为1
          }
          varintBytes.push(byte);
        } while (value !== 0);
      
        return Buffer.from(varintBytes);
      }
  }

