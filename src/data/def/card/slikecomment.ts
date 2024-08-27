
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLikeComment {
	key : bigint;
	reply : number;
	likes : number;
}

class SLikeComment {
    static DefaultData: SLikeComment = {
	key : 0n,
	reply : 0,
	likes : 0,
    }

    static Unmarshal(buffer: Buffer): SLikeComment { 
	const reader = new BufferReader(buffer)
try{
	SLikeComment.DefaultData.key = reader.readInt64()
	SLikeComment.DefaultData.reply = reader.readInt32()
	SLikeComment.DefaultData.likes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLikeComment.DefaultData);
    }

    static Marshal(data: SLikeComment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.key))
	buffer.writeInt32(data.reply)
	buffer.writeInt32(data.likes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLikeComment;