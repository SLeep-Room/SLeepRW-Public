
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';

interface SChildrenDayInfo {
	awards : [number,number][];
	score : number;
	leftTimes : [number,number][];
	taskFinishLeft : bigint;
}

class SChildrenDayInfo {
    static DefaultData: SChildrenDayInfo = {
	awards : [],
	score : 0,
	leftTimes : [],
	taskFinishLeft : 0n,
    }

    static Unmarshal(buffer: Buffer): SChildrenDayInfo { 
	const reader = new BufferReader(buffer)
try{
	const awardsLength = reader.readCompactUInt32();

	for (let i = 0; i < awardsLength; i++) {
	    SChildrenDayInfo.DefaultData.awards.push([reader.readInt32(),reader.readInt32()]);
	}
	SChildrenDayInfo.DefaultData.score = reader.readInt32()
	const leftTimesLength = reader.readCompactUInt32();

	for (let i = 0; i < leftTimesLength; i++) {
	    SChildrenDayInfo.DefaultData.leftTimes.push([reader.readInt32(),reader.readInt32()]);
	}
	SChildrenDayInfo.DefaultData.taskFinishLeft = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChildrenDayInfo.DefaultData);
    }

    static Marshal(data: SChildrenDayInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.awards).length);
	data.awards.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.score)
	buffer.writeCompactInt32(Object.keys(data.leftTimes).length);
	data.leftTimes.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt64(BigInt(data.taskFinishLeft))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChildrenDayInfo;