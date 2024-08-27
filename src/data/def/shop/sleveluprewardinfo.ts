
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLevelUpRewardInfo {
	unlock : number;
	goodId : number;
	chargeNum : number;
	ids : number[];
}

class SLevelUpRewardInfo {
    static DefaultData: SLevelUpRewardInfo = {
	unlock : 0,
	goodId : 0,
	chargeNum : 0,
	ids : [],
    }

    static Unmarshal(buffer: Buffer): SLevelUpRewardInfo { 
	const reader = new BufferReader(buffer)
try{
	SLevelUpRewardInfo.DefaultData.unlock = reader.readInt32()
	SLevelUpRewardInfo.DefaultData.goodId = reader.readInt32()
	SLevelUpRewardInfo.DefaultData.chargeNum = reader.readInt32()
	const idsLength = reader.readCompactUInt32();

	for (let i = 0; i < idsLength; i++) {
	    SLevelUpRewardInfo.DefaultData.ids.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLevelUpRewardInfo.DefaultData);
    }

    static Marshal(data: SLevelUpRewardInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.unlock)
	buffer.writeInt32(data.goodId)
	buffer.writeInt32(data.chargeNum)
	buffer.writeCompactInt32(Object.keys(data.ids).length);
	data.ids.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLevelUpRewardInfo;