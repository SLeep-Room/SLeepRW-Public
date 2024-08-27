
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAddFriend {
	userId : bigint;
}

class CAddFriend {
    static DefaultData: CAddFriend = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): CAddFriend { 
	const reader = new BufferReader(buffer)
try{
	CAddFriend.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAddFriend.DefaultData);
    }

    static Marshal(data: CAddFriend): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAddFriend;