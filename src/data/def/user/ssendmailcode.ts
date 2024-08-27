
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendMailCode {
	result : number;
	time : bigint;
}

class SSendMailCode {
    static DefaultData: SSendMailCode = {
	result : 0,
	time : 0n,
    }

    static Unmarshal(buffer: Buffer): SSendMailCode { 
	const reader = new BufferReader(buffer)
try{
	SSendMailCode.DefaultData.result = reader.readInt16()
	SSendMailCode.DefaultData.time = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendMailCode.DefaultData);
    }

    static Marshal(data: SSendMailCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt16(data.result)
	buffer.writeInt64(BigInt(data.time))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendMailCode;