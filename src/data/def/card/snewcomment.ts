
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import userComment from '../../bean/card/commentinfo';

interface SNewComment {
	result : number;
	userComment : typeof userComment.DefaultData;
}

class SNewComment {
    static DefaultData: SNewComment = {
	result : 0,
	userComment : userComment.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SNewComment { 
	const reader = new BufferReader(buffer)
try{
	SNewComment.DefaultData.result = reader.readInt32()
	SNewComment.DefaultData.userComment = userComment.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SNewComment.DefaultData);
    }

    static Marshal(data: SNewComment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeBuffer(userComment.Marshal(data.userComment))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SNewComment;