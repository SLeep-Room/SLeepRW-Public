
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLikeComment {
	commentKey : bigint;
	roleId : number;
	operate : number;
}

class CLikeComment {
    static DefaultData: CLikeComment = {
	commentKey : 0n,
	roleId : 0,
	operate : 0,
    }

    static Unmarshal(buffer: Buffer): CLikeComment { 
	const reader = new BufferReader(buffer)
try{
	CLikeComment.DefaultData.commentKey = reader.readInt64()
	CLikeComment.DefaultData.roleId = reader.readInt32()
	CLikeComment.DefaultData.operate = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLikeComment.DefaultData);
    }

    static Marshal(data: CLikeComment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.commentKey))
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.operate)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLikeComment;