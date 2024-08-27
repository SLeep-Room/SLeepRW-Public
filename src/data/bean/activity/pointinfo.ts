
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface PointInfo {
	pointID : number;
	pointEventsType : number[];
	pointEventsID : number[];
	pointBuff : number[];
	pointState : number;
}

class PointInfo {
    static DefaultData: PointInfo = {
	pointID : 0,
	pointEventsType : [],
	pointEventsID : [],
	pointBuff : [],
	pointState : 0,
    }

    static Unmarshal(buffer: BufferReader): PointInfo { 
	const reader = buffer
try{
	PointInfo.DefaultData.pointID = reader.readInt32()
	const pointEventsTypeLength = reader.readCompactUInt32();

	for (let i = 0; i < pointEventsTypeLength; i++) {
	    PointInfo.DefaultData.pointEventsType.push(reader.readInt32());
	}
	const pointEventsIDLength = reader.readCompactUInt32();

	for (let i = 0; i < pointEventsIDLength; i++) {
	    PointInfo.DefaultData.pointEventsID.push(reader.readInt32());
	}
	const pointBuffLength = reader.readCompactUInt32();

	for (let i = 0; i < pointBuffLength; i++) {
	    PointInfo.DefaultData.pointBuff.push(reader.readInt32());
	}
	PointInfo.DefaultData.pointState = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},PointInfo.DefaultData);
    }

    static Marshal(data: PointInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.pointID)
	buffer.writeCompactInt32(Object.keys(data.pointEventsType).length);
	data.pointEventsType.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.pointEventsID).length);
	data.pointEventsID.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.pointBuff).length);
	data.pointBuff.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.pointState)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default PointInfo;