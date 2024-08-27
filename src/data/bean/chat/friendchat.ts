
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import hyperlinks from '../../bean/chat/hyperlink';

interface FriendChat {
	msg : string;
	hyperlinks : typeof hyperlinks.DefaultData[];
	time : bigint;
}

class FriendChat {
    static DefaultData: FriendChat = {
	msg : "",
	hyperlinks : [],
	time : 0n,
    }

    static Unmarshal(buffer: BufferReader): FriendChat { 
	const reader = buffer
try{
	FriendChat.DefaultData.msg = reader.readString()
	const hyperlinksLength = reader.readCompactUInt32();

	for (let i = 0; i < hyperlinksLength; i++) {
	    FriendChat.DefaultData.hyperlinks.push(hyperlinks.Unmarshal(reader));
	}
	FriendChat.DefaultData.time = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},FriendChat.DefaultData);
    }

    static Marshal(data: FriendChat): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.msg)
	buffer.writeCompactInt32(Object.keys(data.hyperlinks).length);
	data.hyperlinks.forEach((value) => {
		buffer.writeBuffer(hyperlinks.Marshal(value))
	});
	buffer.writeInt64(BigInt(data.time))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default FriendChat;