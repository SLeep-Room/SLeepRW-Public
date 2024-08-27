
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSummerEchoEvent {
	result : number;
	constructionID : number;
	eventID : number;
}

class SSummerEchoEvent {
    static DefaultData: SSummerEchoEvent = {
	result : 0,
	constructionID : 0,
	eventID : 0,
    }

    static Unmarshal(buffer: Buffer): SSummerEchoEvent { 
	const reader = new BufferReader(buffer)
try{
	SSummerEchoEvent.DefaultData.result = reader.readInt32()
	SSummerEchoEvent.DefaultData.constructionID = reader.readInt32()
	SSummerEchoEvent.DefaultData.eventID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSummerEchoEvent.DefaultData);
    }

    static Marshal(data: SSummerEchoEvent): Buffer { 
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


export default SSummerEchoEvent;