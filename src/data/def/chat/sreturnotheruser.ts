
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReturnOtherUser {
	userId : bigint;
}

class SReturnOtherUser {
    static DefaultData: SReturnOtherUser = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): SReturnOtherUser { 
	const reader = new BufferReader(buffer)
try{
	SReturnOtherUser.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReturnOtherUser.DefaultData);
    }

    static Marshal(data: SReturnOtherUser): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReturnOtherUser;