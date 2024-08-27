
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import comments from '../../bean/card/commentinfo';

interface SGetMoreComments {
	commentType : number;
	roleId : number;
	firstIndex : number;
	comments : typeof comments.DefaultData[];
}

class SGetMoreComments {
    static DefaultData: SGetMoreComments = {
	commentType : 0,
	roleId : 0,
	firstIndex : 0,
	comments : [],
    }

    static Unmarshal(buffer: Buffer): SGetMoreComments { 
	const reader = new BufferReader(buffer)
try{
	SGetMoreComments.DefaultData.commentType = reader.readInt32()
	SGetMoreComments.DefaultData.roleId = reader.readInt32()
	SGetMoreComments.DefaultData.firstIndex = reader.readInt32()
	const commentsLength = reader.readCompactUInt32();

	for (let i = 0; i < commentsLength; i++) {
	    SGetMoreComments.DefaultData.comments.push(comments.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetMoreComments.DefaultData);
    }

    static Marshal(data: SGetMoreComments): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.commentType)
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.firstIndex)
	buffer.writeCompactInt32(Object.keys(data.comments).length);
	data.comments.forEach((value) => {
		buffer.writeBuffer(comments.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetMoreComments;