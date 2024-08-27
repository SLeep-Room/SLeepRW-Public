
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SMoveSummerConstruction {
	result : number;
	ID : number;
	level : number;
	vertical : number;
	abscissa : number;
	event : number[];
}

class SMoveSummerConstruction {
    static DefaultData: SMoveSummerConstruction = {
	result : 0,
	ID : 0,
	level : 0,
	vertical : 0,
	abscissa : 0,
	event : [],
    }

    static Unmarshal(buffer: Buffer): SMoveSummerConstruction { 
	const reader = new BufferReader(buffer)
try{
	SMoveSummerConstruction.DefaultData.result = reader.readInt32()
	SMoveSummerConstruction.DefaultData.ID = reader.readInt32()
	SMoveSummerConstruction.DefaultData.level = reader.readInt32()
	SMoveSummerConstruction.DefaultData.vertical = reader.readInt32()
	SMoveSummerConstruction.DefaultData.abscissa = reader.readInt32()
	const eventLength = reader.readCompactUInt32();

	for (let i = 0; i < eventLength; i++) {
	    SMoveSummerConstruction.DefaultData.event.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SMoveSummerConstruction.DefaultData);
    }

    static Marshal(data: SMoveSummerConstruction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.ID)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.vertical)
	buffer.writeInt32(data.abscissa)
	buffer.writeCompactInt32(Object.keys(data.event).length);
	data.event.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SMoveSummerConstruction;