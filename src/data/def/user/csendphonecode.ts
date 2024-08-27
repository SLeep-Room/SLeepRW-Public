
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSendPhoneCode {
	phoneNum : string;
}

class CSendPhoneCode {
    static DefaultData: CSendPhoneCode = {
	phoneNum : "",
    }

    static Unmarshal(buffer: Buffer): CSendPhoneCode { 
	const reader = new BufferReader(buffer)
try{
	CSendPhoneCode.DefaultData.phoneNum = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSendPhoneCode.DefaultData);
    }

    static Marshal(data: CSendPhoneCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.phoneNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSendPhoneCode;