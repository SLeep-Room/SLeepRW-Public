
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import baseUserData from '../../bean/chat/baseuserdata';
import messages from '../../bean/chat/friendchat';

interface OtherUserInfo {
	baseUserData : typeof baseUserData.DefaultData;
	identity : number;
	lastLogoutTime : bigint;
	friendTime : bigint;
	messages : typeof messages.DefaultData[];
	lastOnLineTime : bigint;
	likeStatus : number;
	sparkStatus : number;
}

class OtherUserInfo {
    static DefaultData: OtherUserInfo = {
	baseUserData : baseUserData.DefaultData,
	identity : 0,
	lastLogoutTime : 0n,
	friendTime : 0n,
	messages : [],
	lastOnLineTime : 0n,
	likeStatus : 0,
	sparkStatus : 0,
    }

    static Unmarshal(buffer: BufferReader): OtherUserInfo { 
	const reader = buffer
try{
	OtherUserInfo.DefaultData.baseUserData = baseUserData.Unmarshal(reader)
	OtherUserInfo.DefaultData.identity = reader.readInt32()
	OtherUserInfo.DefaultData.lastLogoutTime = reader.readInt64()
	OtherUserInfo.DefaultData.friendTime = reader.readInt64()
	const messagesLength = reader.readCompactUInt32();

	for (let i = 0; i < messagesLength; i++) {
	    OtherUserInfo.DefaultData.messages.push(messages.Unmarshal(reader));
	}
	OtherUserInfo.DefaultData.lastOnLineTime = reader.readInt64()
	OtherUserInfo.DefaultData.likeStatus = reader.readInt32()
	OtherUserInfo.DefaultData.sparkStatus = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},OtherUserInfo.DefaultData);
    }

    static Marshal(data: OtherUserInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(baseUserData.Marshal(data.baseUserData))
	buffer.writeInt32(data.identity)
	buffer.writeInt64(BigInt(data.lastLogoutTime))
	buffer.writeInt64(BigInt(data.friendTime))
	buffer.writeCompactInt32(Object.keys(data.messages).length);
	data.messages.forEach((value) => {
		buffer.writeBuffer(messages.Marshal(value))
	});
	buffer.writeInt64(BigInt(data.lastOnLineTime))
	buffer.writeInt32(data.likeStatus)
	buffer.writeInt32(data.sparkStatus)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default OtherUserInfo;