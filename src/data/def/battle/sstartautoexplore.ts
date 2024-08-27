
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import curBattleInfo from '../../bean/battle/battleinfo';

interface SStartAutoExplore {
	zoneId : number;
	dungeonType : number;
	monsters : [number,number][];
	lastBattleId : number;
	battleResult : number;
	curBattleInfo : typeof curBattleInfo.DefaultData;
}

class SStartAutoExplore {
    static DefaultData: SStartAutoExplore = {
	zoneId : 0,
	dungeonType : 0,
	monsters : [],
	lastBattleId : 0,
	battleResult : 0,
	curBattleInfo : curBattleInfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SStartAutoExplore { 
	const reader = new BufferReader(buffer)
try{
	SStartAutoExplore.DefaultData.zoneId = reader.readInt32()
	SStartAutoExplore.DefaultData.dungeonType = reader.readInt32()
	const monstersLength = reader.readCompactUInt32();

	for (let i = 0; i < monstersLength; i++) {
	    SStartAutoExplore.DefaultData.monsters.push([reader.readInt32(),reader.readInt32()]);
	}
	SStartAutoExplore.DefaultData.lastBattleId = reader.readInt32()
	SStartAutoExplore.DefaultData.battleResult = reader.readInt32()
	SStartAutoExplore.DefaultData.curBattleInfo = curBattleInfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SStartAutoExplore.DefaultData);
    }

    static Marshal(data: SStartAutoExplore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.zoneId)
	buffer.writeInt32(data.dungeonType)
	buffer.writeCompactInt32(Object.keys(data.monsters).length);
	data.monsters.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.lastBattleId)
	buffer.writeInt32(data.battleResult)
	buffer.writeBuffer(curBattleInfo.Marshal(data.curBattleInfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SStartAutoExplore;