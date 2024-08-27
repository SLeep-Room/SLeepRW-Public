
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSendMailCode {
	address : string;
}

class CSendMailCode {
    static DefaultData: CSendMailCode = {
	address : "",
    }

    static Unmarshal(buffer: Buffer): CSendMailCode { 
	const reader = new BufferReader(buffer)
try{
	CSendMailCode.DefaultData.address = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSendMailCode.DefaultData);
    }

    static Marshal(data: CSendMailCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.address)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSendMailCode;