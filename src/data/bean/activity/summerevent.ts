
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface summerevent {
	construction : number;
	events : number[];
	autoExplore : number[];
}

class summerevent {
    static DefaultData: summerevent = {
	construction : 0,
	events : [],
	autoExplore : [],
    }

    static Unmarshal(buffer: BufferReader): summerevent { 
	const reader = buffer
try{
	summerevent.DefaultData.construction = reader.readInt32()
	const eventsLength = reader.readCompactUInt32();

	for (let i = 0; i < eventsLength; i++) {
	    summerevent.DefaultData.events.push(reader.readInt32());
	}
	const autoExploreLength = reader.readCompactUInt32();

	for (let i = 0; i < autoExploreLength; i++) {
	    summerevent.DefaultData.autoExplore.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},summerevent.DefaultData);
    }

    static Marshal(data: summerevent): Buffer { 
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


export default summerevent;