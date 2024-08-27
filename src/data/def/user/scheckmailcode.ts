
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCheckMailCode {
	result : number;
	address : string;
}

class SCheckMailCode {
    static DefaultData: SCheckMailCode = {
	result : 0,
	address : "",
    }

    static Unmarshal(buffer: Buffer): SCheckMailCode { 
	const reader = new BufferReader(buffer)
try{
	SCheckMailCode.DefaultData.result = reader.readInt16()
	SCheckMailCode.DefaultData.address = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCheckMailCode.DefaultData);
    }

    static Marshal(data: SCheckMailCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt16(data.result)
	buffer.writeString(data.address)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCheckMailCode;