
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SummerEchoConstruction {
	ID : number;
	vertical : number;
	abscissa : number;
	event : number[];
	locked : number[];
	autoExplore : number[];
	fog : number;
	unlockTime : bigint;
}

class SummerEchoConstruction {
    static DefaultData: SummerEchoConstruction = {
	ID : 0,
	vertical : 0,
	abscissa : 0,
	event : [],
	locked : [],
	autoExplore : [],
	fog : 0,
	unlockTime : 0n,
    }

    static Unmarshal(buffer: BufferReader): SummerEchoConstruction { 
	const reader = buffer
try{
	SummerEchoConstruction.DefaultData.ID = reader.readInt32()
	SummerEchoConstruction.DefaultData.vertical = reader.readInt32()
	SummerEchoConstruction.DefaultData.abscissa = reader.readInt32()
	const eventLength = reader.readCompactUInt32();

	for (let i = 0; i < eventLength; i++) {
	    SummerEchoConstruction.DefaultData.event.push(reader.readInt32());
	}
	const lockedLength = reader.readCompactUInt32();

	for (let i = 0; i < lockedLength; i++) {
	    SummerEchoConstruction.DefaultData.locked.push(reader.readInt32());
	}
	const autoExploreLength = reader.readCompactUInt32();

	for (let i = 0; i < autoExploreLength; i++) {
	    SummerEchoConstruction.DefaultData.autoExplore.push(reader.readInt32());
	}
	SummerEchoConstruction.DefaultData.fog = reader.readInt32()
	SummerEchoConstruction.DefaultData.unlockTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SummerEchoConstruction.DefaultData);
    }

    static Marshal(data: SummerEchoConstruction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.ID)
	buffer.writeInt32(data.vertical)
	buffer.writeInt32(data.abscissa)
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
	});
	buffer.writeInt32(data.fog)
	buffer.writeInt64(BigInt(data.unlockTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SummerEchoConstruction;