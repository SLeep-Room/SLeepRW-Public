
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCheckPhoneCode {
	result : number;
	num : string;
}

class SCheckPhoneCode {
    static DefaultData: SCheckPhoneCode = {
	result : 0,
	num : "",
    }

    static Unmarshal(buffer: Buffer): SCheckPhoneCode { 
	const reader = new BufferReader(buffer)
try{
	SCheckPhoneCode.DefaultData.result = reader.readInt16()
	SCheckPhoneCode.DefaultData.num = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCheckPhoneCode.DefaultData);
    }

    static Marshal(data: SCheckPhoneCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt16(data.result)
	buffer.writeString(data.num)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCheckPhoneCode;