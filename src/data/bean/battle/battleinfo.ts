
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import left from '../../bean/battle/fighter';
import right from '../../bean/battle/fighter';
import assist from '../../bean/battle/fighter';
import auto from '../../bean/battle/autofightskills';
import battleBuffs from '../../bean/battle/battlebuff';

interface BattleInfo {
	id : number;
	battleType : number;
	battleid : number;
	battleSceneId : number;
	lineId : number;
	left : [number,typeof left.DefaultData][];
	right : [number,typeof right.DefaultData][];
	assist : typeof assist.DefaultData;
	leftAssistNum : number;
	totalAssistNum : number;
	seed : number;
	guide : number;
	auto : typeof auto.DefaultData;
	battleVerifyNum : bigint;
	battleDuration : bigint;
	battleBuffs : typeof battleBuffs.DefaultData[];
}

class BattleInfo {
    static DefaultData: BattleInfo = {
	id : 0,
	battleType : 0,
	battleid : 0,
	battleSceneId : 0,
	lineId : 0,
	left : [],
	right : [],
	assist : assist.DefaultData,
	leftAssistNum : 0,
	totalAssistNum : 0,
	seed : 0,
	guide : 0,
	auto : auto.DefaultData,
	battleVerifyNum : 0n,
	battleDuration : 0n,
	battleBuffs : [],
    }

    static Unmarshal(buffer: BufferReader): BattleInfo { 
	const reader = buffer
try{
	BattleInfo.DefaultData.id = reader.readInt32()
	BattleInfo.DefaultData.battleType = reader.readInt32()
	BattleInfo.DefaultData.battleid = reader.readInt32()
	BattleInfo.DefaultData.battleSceneId = reader.readInt32()
	BattleInfo.DefaultData.lineId = reader.readInt32()
	const leftLength = reader.readCompactUInt32();

	for (let i = 0; i < leftLength; i++) {
	    BattleInfo.DefaultData.left.push([reader.readInt32(),left.Unmarshal(reader)]);
	}
	const rightLength = reader.readCompactUInt32();

	for (let i = 0; i < rightLength; i++) {
	    BattleInfo.DefaultData.right.push([reader.readInt32(),right.Unmarshal(reader)]);
	}
	BattleInfo.DefaultData.assist = assist.Unmarshal(reader)
	BattleInfo.DefaultData.leftAssistNum = reader.readInt32()
	BattleInfo.DefaultData.totalAssistNum = reader.readInt32()
	BattleInfo.DefaultData.seed = reader.readInt32()
	BattleInfo.DefaultData.guide = reader.readInt32()
	BattleInfo.DefaultData.auto = auto.Unmarshal(reader)
	BattleInfo.DefaultData.battleVerifyNum = reader.readInt64()
	BattleInfo.DefaultData.battleDuration = reader.readInt64()
	const battleBuffsLength = reader.readCompactUInt32();

	for (let i = 0; i < battleBuffsLength; i++) {
	    BattleInfo.DefaultData.battleBuffs.push(battleBuffs.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BattleInfo.DefaultData);
    }

    static Marshal(data: BattleInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.battleType)
	buffer.writeInt32(data.battleid)
	buffer.writeInt32(data.battleSceneId)
	buffer.writeInt32(data.lineId)
	buffer.writeCompactInt32(Object.keys(data.left).length);
	data.left.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(left.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.right).length);
	data.right.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(right.Marshal(value))
	});
	buffer.writeBuffer(assist.Marshal(data.assist))
	buffer.writeInt32(data.leftAssistNum)
	buffer.writeInt32(data.totalAssistNum)
	buffer.writeInt32(data.seed)
	buffer.writeInt32(data.guide)
	buffer.writeBuffer(auto.Marshal(data.auto))
	buffer.writeInt64(BigInt(data.battleVerifyNum))
	buffer.writeInt64(BigInt(data.battleDuration))
	buffer.writeCompactInt32(Object.keys(data.battleBuffs).length);
	data.battleBuffs.forEach((value) => {
		buffer.writeBuffer(battleBuffs.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default BattleInfo;