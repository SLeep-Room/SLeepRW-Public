
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLikeFriends {
	userId : bigint;
}

class SLikeFriends {
    static DefaultData: SLikeFriends = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): SLikeFriends { 
	const reader = new BufferReader(buffer)
try{
	SLikeFriends.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLikeFriends.DefaultData);
    }

    static Marshal(data: SLikeFriends): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLikeFriends;