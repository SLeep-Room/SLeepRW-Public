
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSummerEchoEvent {
	constructionID : number;
	eventID : number;
	lineupID : number;
}

class CSummerEchoEvent {
    static DefaultData: CSummerEchoEvent = {
	constructionID : 0,
	eventID : 0,
	lineupID : 0,
    }

    static Unmarshal(buffer: Buffer): CSummerEchoEvent { 
	const reader = new BufferReader(buffer)
try{
	CSummerEchoEvent.DefaultData.constructionID = reader.readInt32()
	CSummerEchoEvent.DefaultData.eventID = reader.readInt32()
	CSummerEchoEvent.DefaultData.lineupID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSummerEchoEvent.DefaultData);
    }

    static Marshal(data: CSummerEchoEvent): Buffer { 
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


export default CSummerEchoEvent;