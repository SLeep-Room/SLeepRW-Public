
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendPhoneCode {
	result : number;
	time : bigint;
}

class SSendPhoneCode {
    static DefaultData: SSendPhoneCode = {
	result : 0,
	time : 0n,
    }

    static Unmarshal(buffer: Buffer): SSendPhoneCode { 
	const reader = new BufferReader(buffer)
try{
	SSendPhoneCode.DefaultData.result = reader.readInt16()
	SSendPhoneCode.DefaultData.time = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendPhoneCode.DefaultData);
    }

    static Marshal(data: SSendPhoneCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt16(data.result)
	buffer.writeInt64(BigInt(data.time))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendPhoneCode;