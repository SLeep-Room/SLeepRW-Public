
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenPuzzle {
	actId : number;
	deadLine : bigint;
	leftTime : bigint;
	puzzleInfo : [number,number][];
	puzzleNum : number;
	progressReward : [number,number][];
}

class SOpenPuzzle {
    static DefaultData: SOpenPuzzle = {
	actId : 0,
	deadLine : 0n,
	leftTime : 0n,
	puzzleInfo : [],
	puzzleNum : 0,
	progressReward : [],
    }

    static Unmarshal(buffer: Buffer): SOpenPuzzle { 
	const reader = new BufferReader(buffer)
try{
	SOpenPuzzle.DefaultData.actId = reader.readInt32()
	SOpenPuzzle.DefaultData.deadLine = reader.readInt64()
	SOpenPuzzle.DefaultData.leftTime = reader.readInt64()
	const puzzleInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < puzzleInfoLength; i++) {
	    SOpenPuzzle.DefaultData.puzzleInfo.push([reader.readInt32(),reader.readInt32()]);
	}
	SOpenPuzzle.DefaultData.puzzleNum = reader.readInt32()
	const progressRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < progressRewardLength; i++) {
	    SOpenPuzzle.DefaultData.progressReward.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenPuzzle.DefaultData);
    }

    static Marshal(data: SOpenPuzzle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.actId)
	buffer.writeInt64(BigInt(data.deadLine))
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeCompactInt32(Object.keys(data.puzzleInfo).length);
	data.puzzleInfo.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.puzzleNum)
	buffer.writeCompactInt32(Object.keys(data.progressReward).length);
	data.progressReward.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenPuzzle;