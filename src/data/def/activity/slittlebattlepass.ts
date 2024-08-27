
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import commonCollection from '../../bean/activity/collection';
import highCollection from '../../bean/activity/collection';
import tasks from '../../bean/task/taskinfo';

interface SLittleBattlePass {
	actId : number;
	deadline : bigint;
	highUnlocked : number;
	commonCollection : typeof commonCollection.DefaultData[];
	highCollection : typeof highCollection.DefaultData[];
	tasks : [number,typeof tasks.DefaultData][];
	chargeMoneyType : number;
	chargePrice : number;
	level : number;
	chipNum : number;
	needChipNum : number;
	leftTime : bigint;
	weeklyLeftTime : bigint;
}

class SLittleBattlePass {
    static DefaultData: SLittleBattlePass = {
	actId : 0,
	deadline : 0n,
	highUnlocked : 0,
	commonCollection : [],
	highCollection : [],
	tasks : [],
	chargeMoneyType : 0,
	chargePrice : 0,
	level : 0,
	chipNum : 0,
	needChipNum : 0,
	leftTime : 0n,
	weeklyLeftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SLittleBattlePass { 
	const reader = new BufferReader(buffer)
try{
	SLittleBattlePass.DefaultData.actId = reader.readInt32()
	SLittleBattlePass.DefaultData.deadline = reader.readInt64()
	SLittleBattlePass.DefaultData.highUnlocked = reader.readInt32()
	const commonCollectionLength = reader.readCompactUInt32();

	for (let i = 0; i < commonCollectionLength; i++) {
	    SLittleBattlePass.DefaultData.commonCollection.push(commonCollection.Unmarshal(reader));
	}
	const highCollectionLength = reader.readCompactUInt32();

	for (let i = 0; i < highCollectionLength; i++) {
	    SLittleBattlePass.DefaultData.highCollection.push(highCollection.Unmarshal(reader));
	}
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    SLittleBattlePass.DefaultData.tasks.push([reader.readInt32(),tasks.Unmarshal(reader)]);
	}
	SLittleBattlePass.DefaultData.chargeMoneyType = reader.readInt32()
	SLittleBattlePass.DefaultData.chargePrice = reader.readInt32()
	SLittleBattlePass.DefaultData.level = reader.readInt32()
	SLittleBattlePass.DefaultData.chipNum = reader.readInt32()
	SLittleBattlePass.DefaultData.needChipNum = reader.readInt32()
	SLittleBattlePass.DefaultData.leftTime = reader.readInt64()
	SLittleBattlePass.DefaultData.weeklyLeftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLittleBattlePass.DefaultData);
    }

    static Marshal(data: SLittleBattlePass): Buffer { 
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
	buffer.writeInt32(data.chargeMoneyType)
	buffer.writeInt32(data.chargePrice)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.chipNum)
	buffer.writeInt32(data.needChipNum)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt64(BigInt(data.weeklyLeftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLittleBattlePass;