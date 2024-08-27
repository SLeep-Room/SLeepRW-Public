
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import battleResult from '../../bean/battle/battleresult';
import exploreawards from '../../bean/item/beans/iteminfo';
import firstPassAward from '../../bean/item/beans/iteminfo';
import curBattleInfo from '../../bean/battle/battleinfo';

interface SEnterMainCity {
	lastFloorId : number;
	battleResult : typeof battleResult.DefaultData;
	money : [number,bigint][];
	exploreawards : typeof exploreawards.DefaultData[];
	resourceParams : number[];
	firstPassAward : typeof firstPassAward.DefaultData[];
	tip : number;
	dungeonType : number;
	curBattleInfo : typeof curBattleInfo.DefaultData;
}

class SEnterMainCity {
    static DefaultData: SEnterMainCity = {
	lastFloorId : 0,
	battleResult : battleResult.DefaultData,
	money : [],
	exploreawards : [],
	resourceParams : [],
	firstPassAward : [],
	tip : 0,
	dungeonType : 0,
	curBattleInfo : curBattleInfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SEnterMainCity { 
	const reader = new BufferReader(buffer)
try{
	SEnterMainCity.DefaultData.lastFloorId = reader.readInt32()
	SEnterMainCity.DefaultData.battleResult = battleResult.Unmarshal(reader)
	const moneyLength = reader.readCompactUInt32();

	for (let i = 0; i < moneyLength; i++) {
	    SEnterMainCity.DefaultData.money.push([reader.readInt32(),reader.readInt64()]);
	}
	const exploreawardsLength = reader.readCompactUInt32();

	for (let i = 0; i < exploreawardsLength; i++) {
	    SEnterMainCity.DefaultData.exploreawards.push(exploreawards.Unmarshal(reader));
	}
	const resourceParamsLength = reader.readCompactUInt32();

	for (let i = 0; i < resourceParamsLength; i++) {
	    SEnterMainCity.DefaultData.resourceParams.push(reader.readInt32());
	}
	const firstPassAwardLength = reader.readCompactUInt32();

	for (let i = 0; i < firstPassAwardLength; i++) {
	    SEnterMainCity.DefaultData.firstPassAward.push(firstPassAward.Unmarshal(reader));
	}
	SEnterMainCity.DefaultData.tip = reader.readInt32()
	SEnterMainCity.DefaultData.dungeonType = reader.readInt32()
	SEnterMainCity.DefaultData.curBattleInfo = curBattleInfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEnterMainCity.DefaultData);
    }

    static Marshal(data: SEnterMainCity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lastFloorId)
	buffer.writeBuffer(battleResult.Marshal(data.battleResult))
	buffer.writeCompactInt32(Object.keys(data.money).length);
	data.money.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});
	buffer.writeCompactInt32(Object.keys(data.exploreawards).length);
	data.exploreawards.forEach((value) => {
		buffer.writeBuffer(exploreawards.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.resourceParams).length);
	data.resourceParams.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.firstPassAward).length);
	data.firstPassAward.forEach((value) => {
		buffer.writeBuffer(firstPassAward.Marshal(value))
	});
	buffer.writeInt32(data.tip)
	buffer.writeInt32(data.dungeonType)
	buffer.writeBuffer(curBattleInfo.Marshal(data.curBattleInfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEnterMainCity;