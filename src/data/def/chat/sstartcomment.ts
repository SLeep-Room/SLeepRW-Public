
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SStartComment {
	logType : number;
	awardId : number;
}

class SStartComment {
    static DefaultData: SStartComment = {
	logType : 0,
	awardId : 0,
    }

    static Unmarshal(buffer: Buffer): SStartComment { 
	const reader = new BufferReader(buffer)
try{
	SStartComment.DefaultData.logType = reader.readInt32()
	SStartComment.DefaultData.awardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SStartComment.DefaultData);
    }

    static Marshal(data: SStartComment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.logType)
	buffer.writeInt32(data.awardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SStartComment;