
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface christmasevent {
	construction : number;
	events : number[];
	autoExplore : number[];
}

class christmasevent {
    static DefaultData: christmasevent = {
	construction : 0,
	events : [],
	autoExplore : [],
    }

    static Unmarshal(buffer: BufferReader): christmasevent { 
	const reader = buffer
try{
	christmasevent.DefaultData.construction = reader.readInt32()
	const eventsLength = reader.readCompactUInt32();

	for (let i = 0; i < eventsLength; i++) {
	    christmasevent.DefaultData.events.push(reader.readInt32());
	}
	const autoExploreLength = reader.readCompactUInt32();

	for (let i = 0; i < autoExploreLength; i++) {
	    christmasevent.DefaultData.autoExplore.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},christmasevent.DefaultData);
    }

    static Marshal(data: christmasevent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.construction)
	buffer.writeCompactInt32(Object.keys(data.events).length);
	data.events.forEach((value) => {
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


export default christmasevent;