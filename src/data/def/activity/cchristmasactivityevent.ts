
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChristmasActivityEvent {
	constructionID : number;
	eventID : number;
	lineupID : number;
}

class CChristmasActivityEvent {
    static DefaultData: CChristmasActivityEvent = {
	constructionID : 0,
	eventID : 0,
	lineupID : 0,
    }

    static Unmarshal(buffer: Buffer): CChristmasActivityEvent { 
	const reader = new BufferReader(buffer)
try{
	CChristmasActivityEvent.DefaultData.constructionID = reader.readInt32()
	CChristmasActivityEvent.DefaultData.eventID = reader.readInt32()
	CChristmasActivityEvent.DefaultData.lineupID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChristmasActivityEvent.DefaultData);
    }

    static Marshal(data: CChristmasActivityEvent): Buffer { 
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


export default CChristmasActivityEvent;