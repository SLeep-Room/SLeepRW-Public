
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import point from '../../bean/battle/point';
import reconnect from '../../bean/battle/triggerobject';
import traps from '../../bean/battle/exploreinstance';
import switches from '../../bean/battle/switchesinstance';
import objects from '../../bean/battle/dungeonobjects';
import specialPoint from '../../bean/battle/point';
import curBattleInfo from '../../bean/battle/battleinfo';
import modules from '../../bean/battle/module';

interface SEnterDungeon {
	id : number;
	lineupId : number;
	point : typeof point.DefaultData;
	reconnect : typeof reconnect.DefaultData;
	traps : typeof traps.DefaultData[];
	switches : typeof switches.DefaultData[];
	objects : typeof objects.DefaultData;
	points : number[];
	prePoints : number[];
	activedOptionIds : number[];
	specialPoint : typeof specialPoint.DefaultData[];
	gold : bigint;
	lastbattleid : number;
	battleresult : number;
	curBattleInfo : typeof curBattleInfo.DefaultData;
	modules : typeof modules.DefaultData[];
	mapOpened : number;
	buffs : [number,number][];
}

class SEnterDungeon {
    static DefaultData: SEnterDungeon = {
	id : 0,
	lineupId : 0,
	point : point.DefaultData,
	reconnect : reconnect.DefaultData,
	traps : [],
	switches : [],
	objects : objects.DefaultData,
	points : [],
	prePoints : [],
	activedOptionIds : [],
	specialPoint : [],
	gold : 0n,
	lastbattleid : 0,
	battleresult : 0,
	curBattleInfo : curBattleInfo.DefaultData,
	modules : [],
	mapOpened : 0,
	buffs : [],
    }

    static Unmarshal(buffer: Buffer): SEnterDungeon { 
	const reader = new BufferReader(buffer)
try{
	SEnterDungeon.DefaultData.id = reader.readInt32()
	SEnterDungeon.DefaultData.lineupId = reader.readInt32()
	SEnterDungeon.DefaultData.point = point.Unmarshal(reader)
	SEnterDungeon.DefaultData.reconnect = reconnect.Unmarshal(reader)
	const trapsLength = reader.readCompactUInt32();

	for (let i = 0; i < trapsLength; i++) {
	    SEnterDungeon.DefaultData.traps.push(traps.Unmarshal(reader));
	}
	const switchesLength = reader.readCompactUInt32();

	for (let i = 0; i < switchesLength; i++) {
	    SEnterDungeon.DefaultData.switches.push(switches.Unmarshal(reader));
	}
	SEnterDungeon.DefaultData.objects = objects.Unmarshal(reader)
	const pointsLength = reader.readCompactUInt32();

	for (let i = 0; i < pointsLength; i++) {
	    SEnterDungeon.DefaultData.points.push(reader.readInt16());
	}
	const prePointsLength = reader.readCompactUInt32();

	for (let i = 0; i < prePointsLength; i++) {
	    SEnterDungeon.DefaultData.prePoints.push(reader.readInt16());
	}
	const activedOptionIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < activedOptionIdsLength; i++) {
	    SEnterDungeon.DefaultData.activedOptionIds.push(reader.readInt32());
	}
	const specialPointLength = reader.readCompactUInt32();

	for (let i = 0; i < specialPointLength; i++) {
	    SEnterDungeon.DefaultData.specialPoint.push(specialPoint.Unmarshal(reader));
	}
	SEnterDungeon.DefaultData.gold = reader.readInt64()
	SEnterDungeon.DefaultData.lastbattleid = reader.readInt32()
	SEnterDungeon.DefaultData.battleresult = reader.readInt32()
	SEnterDungeon.DefaultData.curBattleInfo = curBattleInfo.Unmarshal(reader)
	const modulesLength = reader.readCompactUInt32();

	for (let i = 0; i < modulesLength; i++) {
	    SEnterDungeon.DefaultData.modules.push(modules.Unmarshal(reader));
	}
	SEnterDungeon.DefaultData.mapOpened = reader.readByte()
	const buffsLength = reader.readCompactUInt32();

	for (let i = 0; i < buffsLength; i++) {
	    SEnterDungeon.DefaultData.buffs.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEnterDungeon.DefaultData);
    }

    static Marshal(data: SEnterDungeon): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.lineupId)
	buffer.writeBuffer(point.Marshal(data.point))
	buffer.writeBuffer(reconnect.Marshal(data.reconnect))
	buffer.writeCompactInt32(Object.keys(data.traps).length);
	data.traps.forEach((value) => {
		buffer.writeBuffer(traps.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.switches).length);
	data.switches.forEach((value) => {
		buffer.writeBuffer(switches.Marshal(value))
	});
	buffer.writeBuffer(objects.Marshal(data.objects))
	buffer.writeCompactInt32(Object.keys(data.points).length);
	data.points.forEach((value) => {
		buffer.writeInt16(value)
	});
	buffer.writeCompactInt32(Object.keys(data.prePoints).length);
	data.prePoints.forEach((value) => {
		buffer.writeInt16(value)
	});
	buffer.writeCompactInt32(Object.keys(data.activedOptionIds).length);
	data.activedOptionIds.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.specialPoint).length);
	data.specialPoint.forEach((value) => {
		buffer.writeBuffer(specialPoint.Marshal(value))
	});
	buffer.writeInt64(BigInt(data.gold))
	buffer.writeInt32(data.lastbattleid)
	buffer.writeInt32(data.battleresult)
	buffer.writeBuffer(curBattleInfo.Marshal(data.curBattleInfo))
	buffer.writeCompactInt32(Object.keys(data.modules).length);
	data.modules.forEach((value) => {
		buffer.writeBuffer(modules.Marshal(value))
	});
	buffer.writeByte(data.mapOpened)
	buffer.writeCompactInt32(Object.keys(data.buffs).length);
	data.buffs.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEnterDungeon;