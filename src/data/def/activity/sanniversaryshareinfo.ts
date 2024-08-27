
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAnniversaryShareInfo {
	leftTime : bigint;
	shareLeftTime : bigint;
	picture : number;
	totalShare : bigint;
	totShareAward : [number,number][];
	dailyShareAward : number;
}

class SAnniversaryShareInfo {
    static DefaultData: SAnniversaryShareInfo = {
	leftTime : 0n,
	shareLeftTime : 0n,
	picture : 0,
	totalShare : 0n,
	totShareAward : [],
	dailyShareAward : 0,
    }

    static Unmarshal(buffer: Buffer): SAnniversaryShareInfo { 
	const reader = new BufferReader(buffer)
try{
	SAnniversaryShareInfo.DefaultData.leftTime = reader.readInt64()
	SAnniversaryShareInfo.DefaultData.shareLeftTime = reader.readInt64()
	SAnniversaryShareInfo.DefaultData.picture = reader.readInt32()
	SAnniversaryShareInfo.DefaultData.totalShare = reader.readInt64()
	const totShareAwardLength = reader.readCompactUInt32();

	for (let i = 0; i < totShareAwardLength; i++) {
	    SAnniversaryShareInfo.DefaultData.totShareAward.push([reader.readInt32(),reader.readInt32()]);
	}
	SAnniversaryShareInfo.DefaultData.dailyShareAward = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAnniversaryShareInfo.DefaultData);
    }

    static Marshal(data: SAnniversaryShareInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt64(BigInt(data.shareLeftTime))
	buffer.writeInt32(data.picture)
	buffer.writeInt64(BigInt(data.totalShare))
	buffer.writeCompactInt32(Object.keys(data.totShareAward).length);
	data.totShareAward.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.dailyShareAward)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAnniversaryShareInfo;