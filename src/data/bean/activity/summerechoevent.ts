
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface summerechoevent {
	construction : number;
	events : number[];
	autoExplore : number[];
	fog : number;
	unlockTime : bigint;
}

class summerechoevent {
    static DefaultData: summerechoevent = {
	construction : 0,
	events : [],
	autoExplore : [],
	fog : 0,
	unlockTime : 0n,
    }

    static Unmarshal(buffer: BufferReader): summerechoevent { 
	const reader = buffer
try{
	summerechoevent.DefaultData.construction = reader.readInt32()
	const eventsLength = reader.readCompactUInt32();

	for (let i = 0; i < eventsLength; i++) {
	    summerechoevent.DefaultData.events.push(reader.readInt32());
	}
	const autoExploreLength = reader.readCompactUInt32();

	for (let i = 0; i < autoExploreLength; i++) {
	    summerechoevent.DefaultData.autoExplore.push(reader.readInt32());
	}
	summerechoevent.DefaultData.fog = reader.readInt32()
	summerechoevent.DefaultData.unlockTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},summerechoevent.DefaultData);
    }

    static Marshal(data: summerechoevent): Buffer { 
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
	});
	buffer.writeInt32(data.fog)
	buffer.writeInt64(BigInt(data.unlockTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default summerechoevent;