
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import challenge from '../../bean/activity/battleinfo';

interface SOpenUndecidedRoad {
	seasonId : number;
	totalScore : number;
	leftTime : bigint;
	battleIds : [number,number][];
	day : number;
	challenge : [number,typeof challenge.DefaultData][];
}

class SOpenUndecidedRoad {
    static DefaultData: SOpenUndecidedRoad = {
	seasonId : 0,
	totalScore : 0,
	leftTime : 0n,
	battleIds : [],
	day : 0,
	challenge : [],
    }

    static Unmarshal(buffer: Buffer): SOpenUndecidedRoad { 
	const reader = new BufferReader(buffer)
try{
	SOpenUndecidedRoad.DefaultData.seasonId = reader.readInt32()
	SOpenUndecidedRoad.DefaultData.totalScore = reader.readInt32()
	SOpenUndecidedRoad.DefaultData.leftTime = reader.readInt64()
	const battleIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < battleIdsLength; i++) {
	    SOpenUndecidedRoad.DefaultData.battleIds.push([reader.readInt32(),reader.readInt32()]);
	}
	SOpenUndecidedRoad.DefaultData.day = reader.readInt32()
	const challengeLength = reader.readCompactUInt32();

	for (let i = 0; i < challengeLength; i++) {
	    SOpenUndecidedRoad.DefaultData.challenge.push([reader.readInt32(),challenge.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenUndecidedRoad.DefaultData);
    }

    static Marshal(data: SOpenUndecidedRoad): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.seasonId)
	buffer.writeInt32(data.totalScore)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeCompactInt32(Object.keys(data.battleIds).length);
	data.battleIds.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.day)
	buffer.writeCompactInt32(Object.keys(data.challenge).length);
	data.challenge.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(challenge.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenUndecidedRoad;