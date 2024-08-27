
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLikeFriends {
	userId : bigint;
}

class CLikeFriends {
    static DefaultData: CLikeFriends = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): CLikeFriends { 
	const reader = new BufferReader(buffer)
try{
	CLikeFriends.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLikeFriends.DefaultData);
    }

    static Marshal(data: CLikeFriends): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLikeFriends;