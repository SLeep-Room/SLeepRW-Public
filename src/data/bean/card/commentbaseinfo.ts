
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CommentBaseInfo {
	userId : bigint;
	userName : string;
	userAvatarId : number;
	userFrameId : number;
	key : bigint;
	page : number;
	likes : number;
	time : bigint;
	comment : string;
}

class CommentBaseInfo {
    static DefaultData: CommentBaseInfo = {
	userId : 0n,
	userName : "",
	userAvatarId : 0,
	userFrameId : 0,
	key : 0n,
	page : 0,
	likes : 0,
	time : 0n,
	comment : "",
    }

    static Unmarshal(buffer: BufferReader): CommentBaseInfo { 
	const reader = buffer
try{
	CommentBaseInfo.DefaultData.userId = reader.readInt64()
	CommentBaseInfo.DefaultData.userName = reader.readString()
	CommentBaseInfo.DefaultData.userAvatarId = reader.readInt32()
	CommentBaseInfo.DefaultData.userFrameId = reader.readInt32()
	CommentBaseInfo.DefaultData.key = reader.readInt64()
	CommentBaseInfo.DefaultData.page = reader.readInt32()
	CommentBaseInfo.DefaultData.likes = reader.readInt32()
	CommentBaseInfo.DefaultData.time = reader.readInt64()
	CommentBaseInfo.DefaultData.comment = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CommentBaseInfo.DefaultData);
    }

    static Marshal(data: CommentBaseInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeString(data.userName)
	buffer.writeInt32(data.userAvatarId)
	buffer.writeInt32(data.userFrameId)
	buffer.writeInt64(BigInt(data.key))
	buffer.writeInt32(data.page)
	buffer.writeInt32(data.likes)
	buffer.writeInt64(BigInt(data.time))
	buffer.writeString(data.comment)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CommentBaseInfo;