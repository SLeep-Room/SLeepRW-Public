
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface UserInfo {
	userid : bigint;
	username : string;
	userlevel : number;
	userexp : number;
	strengthLimit : number;
	serverId : number;
	isNew : number;
	guides : [number,number][];
	buffGuides : [number,number][];
	procedures : [number,number][];
	power : number;
	avatarId : number;
	frameId : number;
	introduce : string;
	configs : [number,number][];
	phoneNum : string;
	mailAddr : string;
	isGM : number;
	tips : number[];
	npcTips : number[];
	enchant_MaNa : number;
	createTime : bigint;
	backgroundRole : number;
	backgroundSkin : number;
	guest : number;
	likedNum : number;
	iplocaladdr : string;
}

class UserInfo {
    static DefaultData: UserInfo = {
	userid : 0n,
	username : "",
	userlevel : 0,
	userexp : 0,
	strengthLimit : 0,
	serverId : 0,
	isNew : 0,
	guides : [],
	buffGuides : [],
	procedures : [],
	power : 0,
	avatarId : 0,
	frameId : 0,
	introduce : "",
	configs : [],
	phoneNum : "",
	mailAddr : "",
	isGM : 0,
	tips : [],
	npcTips : [],
	enchant_MaNa : 0,
	createTime : 0n,
	backgroundRole : 0,
	backgroundSkin : 0,
	guest : 0,
	likedNum : 0,
	iplocaladdr : "",
    }

    static Unmarshal(buffer: BufferReader): UserInfo { 
	const reader = buffer
try{
	UserInfo.DefaultData.userid = reader.readInt64()
	UserInfo.DefaultData.username = reader.readString()
	UserInfo.DefaultData.userlevel = reader.readInt32()
	UserInfo.DefaultData.userexp = reader.readInt32()
	UserInfo.DefaultData.strengthLimit = reader.readInt32()
	UserInfo.DefaultData.serverId = reader.readInt32()
	UserInfo.DefaultData.isNew = reader.readInt32()
	const guidesLength = reader.readCompactUInt32();

	for (let i = 0; i < guidesLength; i++) {
	    UserInfo.DefaultData.guides.push([reader.readInt32(),reader.readInt32()]);
	}
	const buffGuidesLength = reader.readCompactUInt32();

	for (let i = 0; i < buffGuidesLength; i++) {
	    UserInfo.DefaultData.buffGuides.push([reader.readInt32(),reader.readInt32()]);
	}
	const proceduresLength = reader.readCompactUInt32();

	for (let i = 0; i < proceduresLength; i++) {
	    UserInfo.DefaultData.procedures.push([reader.readInt32(),reader.readInt32()]);
	}
	UserInfo.DefaultData.power = reader.readInt32()
	UserInfo.DefaultData.avatarId = reader.readInt32()
	UserInfo.DefaultData.frameId = reader.readInt32()
	UserInfo.DefaultData.introduce = reader.readString()
	const configsLength = reader.readCompactUInt32();

	for (let i = 0; i < configsLength; i++) {
	    UserInfo.DefaultData.configs.push([reader.readInt32(),reader.readInt32()]);
	}
	UserInfo.DefaultData.phoneNum = reader.readString()
	UserInfo.DefaultData.mailAddr = reader.readString()
	UserInfo.DefaultData.isGM = reader.readInt16()
	const tipsLength = reader.readCompactUInt32();

	for (let i = 0; i < tipsLength; i++) {
	    UserInfo.DefaultData.tips.push(reader.readInt32());
	}
	const npcTipsLength = reader.readCompactUInt32();

	for (let i = 0; i < npcTipsLength; i++) {
	    UserInfo.DefaultData.npcTips.push(reader.readInt32());
	}
	UserInfo.DefaultData.enchant_MaNa = reader.readInt32()
	UserInfo.DefaultData.createTime = reader.readInt64()
	UserInfo.DefaultData.backgroundRole = reader.readInt32()
	UserInfo.DefaultData.backgroundSkin = reader.readInt32()
	UserInfo.DefaultData.guest = reader.readInt32()
	UserInfo.DefaultData.likedNum = reader.readInt32()
	UserInfo.DefaultData.iplocaladdr = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},UserInfo.DefaultData);
    }

    static Marshal(data: UserInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userid))
	buffer.writeString(data.username)
	buffer.writeInt32(data.userlevel)
	buffer.writeInt32(data.userexp)
	buffer.writeInt32(data.strengthLimit)
	buffer.writeInt32(data.serverId)
	buffer.writeInt32(data.isNew)
	buffer.writeCompactInt32(Object.keys(data.guides).length);
	data.guides.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.buffGuides).length);
	data.buffGuides.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.procedures).length);
	data.procedures.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.power)
	buffer.writeInt32(data.avatarId)
	buffer.writeInt32(data.frameId)
	buffer.writeString(data.introduce)
	buffer.writeCompactInt32(Object.keys(data.configs).length);
	data.configs.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeString(data.phoneNum)
	buffer.writeString(data.mailAddr)
	buffer.writeInt16(data.isGM)
	buffer.writeCompactInt32(Object.keys(data.tips).length);
	data.tips.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.npcTips).length);
	data.npcTips.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.enchant_MaNa)
	buffer.writeInt64(BigInt(data.createTime))
	buffer.writeInt32(data.backgroundRole)
	buffer.writeInt32(data.backgroundSkin)
	buffer.writeInt32(data.guest)
	buffer.writeInt32(data.likedNum)
	buffer.writeString(data.iplocaladdr)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default UserInfo;