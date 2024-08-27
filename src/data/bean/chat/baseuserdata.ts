
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface BaseUserData {
	userId : bigint;
	userName : string;
	avatarId : number;
	frameId : number;
	userLv : number;
	showBadges : number[];
	spiritvip : number;
	iplocaladdr : string;
}

class BaseUserData {
    static DefaultData: BaseUserData = {
	userId : 0n,
	userName : "",
	avatarId : 0,
	frameId : 0,
	userLv : 0,
	showBadges : [],
	spiritvip : 0,
	iplocaladdr : "",
    }

    static Unmarshal(buffer: BufferReader): BaseUserData { 
	const reader = buffer
try{
	BaseUserData.DefaultData.userId = reader.readInt64()
	BaseUserData.DefaultData.userName = reader.readString()
	BaseUserData.DefaultData.avatarId = reader.readInt32()
	BaseUserData.DefaultData.frameId = reader.readInt32()
	BaseUserData.DefaultData.userLv = reader.readInt32()
	const showBadgesLength = reader.readCompactUInt32();

	for (let i = 0; i < showBadgesLength; i++) {
	    BaseUserData.DefaultData.showBadges.push(reader.readInt32());
	}
	BaseUserData.DefaultData.spiritvip = reader.readInt32()
	BaseUserData.DefaultData.iplocaladdr = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BaseUserData.DefaultData);
    }

    static Marshal(data: BaseUserData): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeString(data.userName)
	buffer.writeInt32(data.avatarId)
	buffer.writeInt32(data.frameId)
	buffer.writeInt32(data.userLv)
	buffer.writeCompactInt32(Object.keys(data.showBadges).length);
	data.showBadges.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.spiritvip)
	buffer.writeString(data.iplocaladdr)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default BaseUserData;