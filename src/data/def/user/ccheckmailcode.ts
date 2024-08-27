
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckMailCode {
	code : string;
}

class CCheckMailCode {
    static DefaultData: CCheckMailCode = {
	code : "",
    }

    static Unmarshal(buffer: Buffer): CCheckMailCode { 
	const reader = new BufferReader(buffer)
try{
	CCheckMailCode.DefaultData.code = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckMailCode.DefaultData);
    }

    static Marshal(data: CCheckMailCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.code)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckMailCode;