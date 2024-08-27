
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import points from '../../bean/activity/pointinfo';

interface SGetTowerFloorInfo {
	enterType : number;
	points : typeof points.DefaultData[];
	passedPoints : number;
	highestPointID : number;
	time2reset : bigint;
	buffList : [number,number][];
	rolesState : [number,number][];
	autoExploreUnlock : number;
	autoExploreState : number;
	rewardRedPoint : number;
	buffNum4Reset : number;
	buff4Choice : number[];
}

class SGetTowerFloorInfo {
    static DefaultData: SGetTowerFloorInfo = {
	enterType : 0,
	points : [],
	passedPoints : 0,
	highestPointID : 0,
	time2reset : 0n,
	buffList : [],
	rolesState : [],
	autoExploreUnlock : 0,
	autoExploreState : 0,
	rewardRedPoint : 0,
	buffNum4Reset : 0,
	buff4Choice : [],
    }

    static Unmarshal(buffer: Buffer): SGetTowerFloorInfo { 
	const reader = new BufferReader(buffer)
try{
	SGetTowerFloorInfo.DefaultData.enterType = reader.readInt32()
	const pointsLength = reader.readCompactUInt32();

	for (let i = 0; i < pointsLength; i++) {
	    SGetTowerFloorInfo.DefaultData.points.push(points.Unmarshal(reader));
	}
	SGetTowerFloorInfo.DefaultData.passedPoints = reader.readInt32()
	SGetTowerFloorInfo.DefaultData.highestPointID = reader.readInt32()
	SGetTowerFloorInfo.DefaultData.time2reset = reader.readInt64()
	const buffListLength = reader.readCompactUInt32();

	for (let i = 0; i < buffListLength; i++) {
	    SGetTowerFloorInfo.DefaultData.buffList.push([reader.readInt32(),reader.readInt32()]);
	}
	const rolesStateLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesStateLength; i++) {
	    SGetTowerFloorInfo.DefaultData.rolesState.push([reader.readInt32(),reader.readInt32()]);
	}
	SGetTowerFloorInfo.DefaultData.autoExploreUnlock = reader.readInt32()
	SGetTowerFloorInfo.DefaultData.autoExploreState = reader.readInt32()
	SGetTowerFloorInfo.DefaultData.rewardRedPoint = reader.readInt32()
	SGetTowerFloorInfo.DefaultData.buffNum4Reset = reader.readInt32()
	const buff4ChoiceLength = reader.readCompactUInt32();

	for (let i = 0; i < buff4ChoiceLength; i++) {
	    SGetTowerFloorInfo.DefaultData.buff4Choice.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetTowerFloorInfo.DefaultData);
    }

    static Marshal(data: SGetTowerFloorInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.enterType)
	buffer.writeCompactInt32(Object.keys(data.points).length);
	data.points.forEach((value) => {
		buffer.writeBuffer(points.Marshal(value))
	});
	buffer.writeInt32(data.passedPoints)
	buffer.writeInt32(data.highestPointID)
	buffer.writeInt64(BigInt(data.time2reset))
	buffer.writeCompactInt32(Object.keys(data.buffList).length);
	data.buffList.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.rolesState).length);
	data.rolesState.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.autoExploreUnlock)
	buffer.writeInt32(data.autoExploreState)
	buffer.writeInt32(data.rewardRedPoint)
	buffer.writeInt32(data.buffNum4Reset)
	buffer.writeCompactInt32(Object.keys(data.buff4Choice).length);
	data.buff4Choice.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetTowerFloorInfo;