
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLoverActivityEvent {
	constructionID : number;
	eventID : number;
	lineupID : number;
}

class CLoverActivityEvent {
    static DefaultData: CLoverActivityEvent = {
	constructionID : 0,
	eventID : 0,
	lineupID : 0,
    }

    static Unmarshal(buffer: Buffer): CLoverActivityEvent { 
	const reader = new BufferReader(buffer)
try{
	CLoverActivityEvent.DefaultData.constructionID = reader.readInt32()
	CLoverActivityEvent.DefaultData.eventID = reader.readInt32()
	CLoverActivityEvent.DefaultData.lineupID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLoverActivityEvent.DefaultData);
    }

    static Marshal(data: CLoverActivityEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.constructionID)
	buffer.writeInt32(data.eventID)
	buffer.writeInt32(data.lineupID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLoverActivityEvent;