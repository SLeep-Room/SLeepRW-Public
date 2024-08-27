
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SDelateComment {
	result : number;
}

class SDelateComment {
    static DefaultData: SDelateComment = {
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SDelateComment { 
	const reader = new BufferReader(buffer)
try{
	SDelateComment.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDelateComment.DefaultData);
    }

    static Marshal(data: SDelateComment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDelateComment;