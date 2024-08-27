
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshOtherUserIdentity {
	userId : bigint;
	identity : number;
}

class SRefreshOtherUserIdentity {
    static DefaultData: SRefreshOtherUserIdentity = {
	userId : 0n,
	identity : 0,
    }

    static Unmarshal(buffer: Buffer): SRefreshOtherUserIdentity { 
	const reader = new BufferReader(buffer)
try{
	SRefreshOtherUserIdentity.DefaultData.userId = reader.readInt64()
	SRefreshOtherUserIdentity.DefaultData.identity = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshOtherUserIdentity.DefaultData);
    }

    static Marshal(data: SRefreshOtherUserIdentity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeInt32(data.identity)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshOtherUserIdentity;