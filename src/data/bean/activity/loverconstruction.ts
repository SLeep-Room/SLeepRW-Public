
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface LoverConstruction {
	ID : number;
	doorID : number;
	event : number[];
	locked : number[];
	autoExplore : number[];
}

class LoverConstruction {
    static DefaultData: LoverConstruction = {
	ID : 0,
	doorID : 0,
	event : [],
	locked : [],
	autoExplore : [],
    }

    static Unmarshal(buffer: BufferReader): LoverConstruction { 
	const reader = buffer
try{
	LoverConstruction.DefaultData.ID = reader.readInt32()
	LoverConstruction.DefaultData.doorID = reader.readInt32()
	const eventLength = reader.readCompactUInt32();

	for (let i = 0; i < eventLength; i++) {
	    LoverConstruction.DefaultData.event.push(reader.readInt32());
	}
	const lockedLength = reader.readCompactUInt32();

	for (let i = 0; i < lockedLength; i++) {
	    LoverConstruction.DefaultData.locked.push(reader.readInt32());
	}
	const autoExploreLength = reader.readCompactUInt32();

	for (let i = 0; i < autoExploreLength; i++) {
	    LoverConstruction.DefaultData.autoExplore.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},LoverConstruction.DefaultData);
    }

    static Marshal(data: LoverConstruction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.ID)
	buffer.writeInt32(data.doorID)
	buffer.writeCompactInt32(Object.keys(data.event).length);
	data.event.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.locked).length);
	data.locked.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.autoExplore).length);
	data.autoExplore.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default LoverConstruction;