
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSummerActivityEvent {
	constructionID : number;
	eventID : number;
	lineupID : number;
}

class CSummerActivityEvent {
    static DefaultData: CSummerActivityEvent = {
	constructionID : 0,
	eventID : 0,
	lineupID : 0,
    }

    static Unmarshal(buffer: Buffer): CSummerActivityEvent { 
	const reader = new BufferReader(buffer)
try{
	CSummerActivityEvent.DefaultData.constructionID = reader.readInt32()
	CSummerActivityEvent.DefaultData.eventID = reader.readInt32()
	CSummerActivityEvent.DefaultData.lineupID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSummerActivityEvent.DefaultData);
    }

    static Marshal(data: CSummerActivityEvent): Buffer { 
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


export default CSummerActivityEvent;