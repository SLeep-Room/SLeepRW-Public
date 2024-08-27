
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDeleteFriend {
	userId : bigint;
}

class CDeleteFriend {
    static DefaultData: CDeleteFriend = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): CDeleteFriend { 
	const reader = new BufferReader(buffer)
try{
	CDeleteFriend.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDeleteFriend.DefaultData);
    }

    static Marshal(data: CDeleteFriend): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDeleteFriend;