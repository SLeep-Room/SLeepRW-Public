
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import baseInfo from '../../bean/card/commentbaseinfo';

interface CommentInfo {
	baseInfo : typeof baseInfo.DefaultData;
	selfLike : number;
}

class CommentInfo {
    static DefaultData: CommentInfo = {
	baseInfo : baseInfo.DefaultData,
	selfLike : 0,
    }

    static Unmarshal(buffer: BufferReader): CommentInfo { 
	const reader = buffer
try{
	CommentInfo.DefaultData.baseInfo = baseInfo.Unmarshal(reader)
	CommentInfo.DefaultData.selfLike = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CommentInfo.DefaultData);
    }

    static Marshal(data: CommentInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(baseInfo.Marshal(data.baseInfo))
	buffer.writeInt32(data.selfLike)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CommentInfo;