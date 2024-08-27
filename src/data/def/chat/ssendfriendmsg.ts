
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import msg from 'SSendFriendMsg.msg';

interface SSendFriendMsg {
	userId : bigint;
	spokesman : number;
	msg : typeof msg.DefaultData;
}

class SSendFriendMsg {
    static DefaultData: SSendFriendMsg = {
	userId : 0n,
	spokesman : 0,
	msg : msg.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SSendFriendMsg { 
	const reader = new BufferReader(buffer)
try{
	SSendFriendMsg.DefaultData.userId = reader.readInt64()
	SSendFriendMsg.DefaultData.spokesman = reader.readInt32()
	SSendFriendMsg.DefaultData.msg = msg.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendFriendMsg.DefaultData);
    }

    static Marshal(data: SSendFriendMsg): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeInt32(data.spokesman)
	buffer.writeBuffer(msg.Marshal(data.msg))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendFriendMsg;