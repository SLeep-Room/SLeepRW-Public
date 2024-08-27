
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CTouchIslandEvent {
	islandID : number;
	event : number;
}

class CTouchIslandEvent {
    static DefaultData: CTouchIslandEvent = {
	islandID : 0,
	event : 0,
    }

    static Unmarshal(buffer: Buffer): CTouchIslandEvent { 
	const reader = new BufferReader(buffer)
try{
	CTouchIslandEvent.DefaultData.islandID = reader.readInt32()
	CTouchIslandEvent.DefaultData.event = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CTouchIslandEvent.DefaultData);
    }

    static Marshal(data: CTouchIslandEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.islandID)
	buffer.writeInt32(data.event)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CTouchIslandEvent;