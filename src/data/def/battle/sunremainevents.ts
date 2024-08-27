
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUnRemainEvents {
	events : [number,number][];
}

class SUnRemainEvents {
    static DefaultData: SUnRemainEvents = {
	events : [],
    }

    static Unmarshal(buffer: Buffer): SUnRemainEvents { 
	const reader = new BufferReader(buffer)
try{
	const eventsLength = reader.readCompactUInt32();

	for (let i = 0; i < eventsLength; i++) {
	    SUnRemainEvents.DefaultData.events.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUnRemainEvents.DefaultData);
    }

    static Marshal(data: SUnRemainEvents): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.events).length);
	data.events.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUnRemainEvents;