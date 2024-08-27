
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChristmasActivityEvent {
	result : number;
	constructionID : number;
	eventID : number;
}

class SChristmasActivityEvent {
    static DefaultData: SChristmasActivityEvent = {
	result : 0,
	constructionID : 0,
	eventID : 0,
    }

    static Unmarshal(buffer: Buffer): SChristmasActivityEvent { 
	const reader = new BufferReader(buffer)
try{
	SChristmasActivityEvent.DefaultData.result = reader.readInt32()
	SChristmasActivityEvent.DefaultData.constructionID = reader.readInt32()
	SChristmasActivityEvent.DefaultData.eventID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChristmasActivityEvent.DefaultData);
    }

    static Marshal(data: SChristmasActivityEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.constructionID)
	buffer.writeInt32(data.eventID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChristmasActivityEvent;