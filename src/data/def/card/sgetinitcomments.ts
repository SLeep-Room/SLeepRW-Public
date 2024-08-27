
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import userComment from '../../bean/card/commentinfo';
import comments from '../../bean/card/commentinfo';

interface SGetInitComments {
	commentType : number;
	roleId : number;
	userComment : typeof userComment.DefaultData;
	comments : typeof comments.DefaultData[];
}

class SGetInitComments {
    static DefaultData: SGetInitComments = {
	commentType : 0,
	roleId : 0,
	userComment : userComment.DefaultData,
	comments : [],
    }

    static Unmarshal(buffer: Buffer): SGetInitComments { 
	const reader = new BufferReader(buffer)
try{
	SGetInitComments.DefaultData.commentType = reader.readInt32()
	SGetInitComments.DefaultData.roleId = reader.readInt32()
	SGetInitComments.DefaultData.userComment = userComment.Unmarshal(reader)
	const commentsLength = reader.readCompactUInt32();

	for (let i = 0; i < commentsLength; i++) {
	    SGetInitComments.DefaultData.comments.push(comments.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetInitComments.DefaultData);
    }

    static Marshal(data: SGetInitComments): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.commentType)
	buffer.writeInt32(data.roleId)
	buffer.writeBuffer(userComment.Marshal(data.userComment))
	buffer.writeCompactInt32(Object.keys(data.comments).length);
	data.comments.forEach((value) => {
		buffer.writeBuffer(comments.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetInitComments;