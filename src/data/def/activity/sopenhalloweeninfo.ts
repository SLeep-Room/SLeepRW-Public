
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenHalloweenInfo {
	pumpkinReward : [number,number][];
	pumpkinPieReward : [number,number][];
	itemOnceNum : [number,number][];
	itemRewardTotalNum : [number,number][];
	leftTime : bigint;
	taskLeftTime : bigint;
}

class SOpenHalloweenInfo {
    static DefaultData: SOpenHalloweenInfo = {
	pumpkinReward : [],
	pumpkinPieReward : [],
	itemOnceNum : [],
	itemRewardTotalNum : [],
	leftTime : 0n,
	taskLeftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SOpenHalloweenInfo { 
	const reader = new BufferReader(buffer)
try{
	const pumpkinRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < pumpkinRewardLength; i++) {
	    SOpenHalloweenInfo.DefaultData.pumpkinReward.push([reader.readInt32(),reader.readInt32()]);
	}
	const pumpkinPieRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < pumpkinPieRewardLength; i++) {
	    SOpenHalloweenInfo.DefaultData.pumpkinPieReward.push([reader.readInt32(),reader.readInt32()]);
	}
	const itemOnceNumLength = reader.readCompactUInt32();

	for (let i = 0; i < itemOnceNumLength; i++) {
	    SOpenHalloweenInfo.DefaultData.itemOnceNum.push([reader.readInt32(),reader.readInt32()]);
	}
	const itemRewardTotalNumLength = reader.readCompactUInt32();

	for (let i = 0; i < itemRewardTotalNumLength; i++) {
	    SOpenHalloweenInfo.DefaultData.itemRewardTotalNum.push([reader.readInt32(),reader.readInt32()]);
	}
	SOpenHalloweenInfo.DefaultData.leftTime = reader.readInt64()
	SOpenHalloweenInfo.DefaultData.taskLeftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenHalloweenInfo.DefaultData);
    }

    static Marshal(data: SOpenHalloweenInfo): Buffer { 
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
	});
	buffer.writeCompactInt32(Object.keys(data.itemOnceNum).length);
	data.itemOnceNum.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.itemRewardTotalNum).length);
	data.itemRewardTotalNum.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt64(BigInt(data.taskLeftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenHalloweenInfo;