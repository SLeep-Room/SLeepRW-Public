
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckPhoneCode {
	code : string;
}

class CCheckPhoneCode {
    static DefaultData: CCheckPhoneCode = {
	code : "",
    }

    static Unmarshal(buffer: Buffer): CCheckPhoneCode { 
	const reader = new BufferReader(buffer)
try{
	CCheckPhoneCode.DefaultData.code = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckPhoneCode.DefaultData);
    }

    static Marshal(data: CCheckPhoneCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.code)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckPhoneCode;