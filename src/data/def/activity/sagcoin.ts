
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import commonCollection from '../../bean/activity/collection';
import highCollection from '../../bean/activity/collection';
import tasks from '../../bean/task/taskinfo';

interface SAgCoin {
	actId : number;
	deadline : bigint;
	highUnlocked : number;
	commonCollection : typeof commonCollection.DefaultData[];
	highCollection : typeof highCollection.DefaultData[];
	tasks : [number,typeof tasks.DefaultData][];
	refreshDailyTime : bigint;
	chargeMoneyType : number;
	chargePrice : number;
	levelPrice : number;
	level : number;
	chipNum : number;
	needChipNum : number;
	canReceiveMaxAward : number;
	leftTime : bigint;
	maxTaskNum : number;
}

class SAgCoin {
    static DefaultData: SAgCoin = {
		actId : 0,
		deadline : 0n,
		highUnlocked : 0,
		commonCollection : [],
		highCollection : [],
		tasks : [],
		refreshDailyTime : 0n,
		chargeMoneyType : 0,
		chargePrice : 0,
		levelPrice : 0,
		level : 0,
		chipNum : 0,
		needChipNum : 0,
		canReceiveMaxAward : 0,
		leftTime : 0n,
		maxTaskNum : 0,
    }

    static Unmarshal(buffer: Buffer): SAgCoin { 
	const reader = new BufferReader(buffer)
try{
	SAgCoin.DefaultData.actId = reader.readInt32()
	SAgCoin.DefaultData.deadline = reader.readInt64()
	SAgCoin.DefaultData.highUnlocked = reader.readInt32()
	const commonCollectionLength = reader.readCompactUInt32();

	for (let i = 0; i < commonCollectionLength; i++) {
	    SAgCoin.DefaultData.commonCollection.push(commonCollection.Unmarshal(reader));
	}
	const highCollectionLength = reader.readCompactUInt32();

	for (let i = 0; i < highCollectionLength; i++) {
	    SAgCoin.DefaultData.highCollection.push(highCollection.Unmarshal(reader));
	}
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    SAgCoin.DefaultData.tasks.push([reader.readInt32(),tasks.Unmarshal(reader)]);
	}
	SAgCoin.DefaultData.refreshDailyTime = reader.readInt64()
	SAgCoin.DefaultData.chargeMoneyType = reader.readInt32()
	SAgCoin.DefaultData.chargePrice = reader.readInt32()
	SAgCoin.DefaultData.levelPrice = reader.readInt32()
	SAgCoin.DefaultData.level = reader.readInt32()
	SAgCoin.DefaultData.chipNum = reader.readInt32()
	SAgCoin.DefaultData.needChipNum = reader.readInt32()
	SAgCoin.DefaultData.canReceiveMaxAward = reader.readInt32()
	SAgCoin.DefaultData.leftTime = reader.readInt64()
	SAgCoin.DefaultData.maxTaskNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAgCoin.DefaultData);
    }

    static Marshal(data: SAgCoin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.actId)
	buffer.writeInt64(BigInt(data.deadline))
	buffer.writeInt32(data.highUnlocked)
	buffer.writeCompactInt32(Object.keys(data.commonCollection).length);
	data.commonCollection.forEach((value) => {
		buffer.writeBuffer(commonCollection.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.highCollection).length);
	data.highCollection.forEach((value) => {
		buffer.writeBuffer(highCollection.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.tasks).length);
	data.tasks.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(tasks.Marshal(value))
	});
	buffer.writeInt64(BigInt(data.refreshDailyTime))
	buffer.writeInt32(data.chargeMoneyType)
	buffer.writeInt32(data.chargePrice)
	buffer.writeInt32(data.levelPrice)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.chipNum)
	buffer.writeInt32(data.needChipNum)
	buffer.writeInt32(data.canReceiveMaxAward)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt32(data.maxTaskNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAgCoin;