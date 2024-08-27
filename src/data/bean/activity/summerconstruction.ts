
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SummerConstruction {
	ID : number;
	level : number;
	vertical : number;
	abscissa : number;
	event : number[];
	canlvup : number;
	event2lock : number;
	locked : number[];
	autoExplore : number[];
}

class SummerConstruction {
    static DefaultData: SummerConstruction = {
	ID : 0,
	level : 0,
	vertical : 0,
	abscissa : 0,
	event : [],
	canlvup : 0,
	event2lock : 0,
	locked : [],
	autoExplore : [],
    }

    static Unmarshal(buffer: BufferReader): SummerConstruction { 
	const reader = buffer
try{
	SummerConstruction.DefaultData.ID = reader.readInt32()
	SummerConstruction.DefaultData.level = reader.readInt32()
	SummerConstruction.DefaultData.vertical = reader.readInt32()
	SummerConstruction.DefaultData.abscissa = reader.readInt32()
	const eventLength = reader.readCompactUInt32();

	for (let i = 0; i < eventLength; i++) {
	    SummerConstruction.DefaultData.event.push(reader.readInt32());
	}
	SummerConstruction.DefaultData.canlvup = reader.readInt32()
	SummerConstruction.DefaultData.event2lock = reader.readInt32()
	const lockedLength = reader.readCompactUInt32();

	for (let i = 0; i < lockedLength; i++) {
	    SummerConstruction.DefaultData.locked.push(reader.readInt32());
	}
	const autoExploreLength = reader.readCompactUInt32();

	for (let i = 0; i < autoExploreLength; i++) {
	    SummerConstruction.DefaultData.autoExplore.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SummerConstruction.DefaultData);
    }

    static Marshal(data: SummerConstruction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.ID)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.vertical)
	buffer.writeInt32(data.abscissa)
	buffer.writeCompactInt32(Object.keys(data.event).length);
	data.event.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.canlvup)
	buffer.writeInt32(data.event2lock)
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


export default SummerConstruction;