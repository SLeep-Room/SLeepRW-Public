
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshHalloweenInfo {
	pumpkinReward : [number,number][];
	pumpkinPieReward : [number,number][];
}

class SRefreshHalloweenInfo {
    static DefaultData: SRefreshHalloweenInfo = {
	pumpkinReward : [],
	pumpkinPieReward : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshHalloweenInfo { 
	const reader = new BufferReader(buffer)
try{
	const pumpkinRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < pumpkinRewardLength; i++) {
	    SRefreshHalloweenInfo.DefaultData.pumpkinReward.push([reader.readInt32(),reader.readInt32()]);
	}
	const pumpkinPieRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < pumpkinPieRewardLength; i++) {
	    SRefreshHalloweenInfo.DefaultData.pumpkinPieReward.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshHalloweenInfo.DefaultData);
    }

    static Marshal(data: SRefreshHalloweenInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.pumpkinReward).length);
	data.pumpkinReward.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.pumpkinPieReward).length);
	data.pumpkinPieReward.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshHalloweenInfo;