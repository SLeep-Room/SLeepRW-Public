
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCompleteComment {
	logResult : number;
	logType : number;
	content : string;
}

class CCompleteComment {
    static DefaultData: CCompleteComment = {
	logResult : 0,
	logType : 0,
	content : "",
    }

    static Unmarshal(buffer: Buffer): CCompleteComment { 
	const reader = new BufferReader(buffer)
try{
	CCompleteComment.DefaultData.logResult = reader.readInt32()
	CCompleteComment.DefaultData.logType = reader.readInt32()
	CCompleteComment.DefaultData.content = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCompleteComment.DefaultData);
    }

    static Marshal(data: CCompleteComment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.logResult)
	buffer.writeInt32(data.logType)
	buffer.writeString(data.content)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCompleteComment;