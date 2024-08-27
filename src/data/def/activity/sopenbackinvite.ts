
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import goodInfo from '../../bean/activity/goodinfo';

interface SOpenBackInvite {
	invitationCode : string;
	inviteeNum : number;
	inviteeLimit : number[];
	returnTime : bigint;
	discountTime : bigint;
	goodInfo : typeof goodInfo.DefaultData[];
}

class SOpenBackInvite {
    static DefaultData: SOpenBackInvite = {
	invitationCode : "",
	inviteeNum : 0,
	inviteeLimit : [],
	returnTime : 0n,
	discountTime : 0n,
	goodInfo : [],
    }

    static Unmarshal(buffer: Buffer): SOpenBackInvite { 
	const reader = new BufferReader(buffer)
try{
	SOpenBackInvite.DefaultData.invitationCode = reader.readString()
	SOpenBackInvite.DefaultData.inviteeNum = reader.readInt32()
	const inviteeLimitLength = reader.readCompactUInt32();

	for (let i = 0; i < inviteeLimitLength; i++) {
	    SOpenBackInvite.DefaultData.inviteeLimit.push(reader.readInt32());
	}
	SOpenBackInvite.DefaultData.returnTime = reader.readInt64()
	SOpenBackInvite.DefaultData.discountTime = reader.readInt64()
	const goodInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < goodInfoLength; i++) {
	    SOpenBackInvite.DefaultData.goodInfo.push(goodInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenBackInvite.DefaultData);
    }

    static Marshal(data: SOpenBackInvite): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.invitationCode)
	buffer.writeInt32(data.inviteeNum)
	buffer.writeCompactInt32(Object.keys(data.inviteeLimit).length);
	data.inviteeLimit.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt64(BigInt(data.returnTime))
	buffer.writeInt64(BigInt(data.discountTime))
	buffer.writeCompactInt32(Object.keys(data.goodInfo).length);
	data.goodInfo.forEach((value) => {
		buffer.writeBuffer(goodInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenBackInvite;