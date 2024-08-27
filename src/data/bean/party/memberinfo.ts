
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface MemberInfo {
	userId : bigint;
	username : string;
	userLevel : number;
	avatarId : number;
	frameId : number;
	applyTime : bigint;
	lastTime : bigint;
	position : number;
	identity : number;
	donate : number;
	spiritvip : number;
}

class MemberInfo {
    static DefaultData: MemberInfo = {
	userId : 0n,
	username : "",
	userLevel : 0,
	avatarId : 0,
	frameId : 0,
	applyTime : 0n,
	lastTime : 0n,
	position : 0,
	identity : 0,
	donate : 0,
	spiritvip : 0,
    }

    static Unmarshal(buffer: BufferReader): MemberInfo { 
	const reader = buffer
try{
	MemberInfo.DefaultData.userId = reader.readInt64()
	MemberInfo.DefaultData.username = reader.readString()
	MemberInfo.DefaultData.userLevel = reader.readInt32()
	MemberInfo.DefaultData.avatarId = reader.readInt32()
	MemberInfo.DefaultData.frameId = reader.readInt32()
	MemberInfo.DefaultData.applyTime = reader.readInt64()
	MemberInfo.DefaultData.lastTime = reader.readInt64()
	MemberInfo.DefaultData.position = reader.readInt32()
	MemberInfo.DefaultData.identity = reader.readInt32()
	MemberInfo.DefaultData.donate = reader.readInt32()
	MemberInfo.DefaultData.spiritvip = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},MemberInfo.DefaultData);
    }

    static Marshal(data: MemberInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeString(data.username)
	buffer.writeInt32(data.userLevel)
	buffer.writeInt32(data.avatarId)
	buffer.writeInt32(data.frameId)
	buffer.writeInt64(BigInt(data.applyTime))
	buffer.writeInt64(BigInt(data.lastTime))
	buffer.writeInt32(data.position)
	buffer.writeInt32(data.identity)
	buffer.writeInt32(data.donate)
	buffer.writeInt32(data.spiritvip)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default MemberInfo;