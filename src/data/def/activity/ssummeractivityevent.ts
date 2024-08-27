
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSummerActivityEvent {
	result : number;
	constructionID : number;
	eventID : number;
}

class SSummerActivityEvent {
    static DefaultData: SSummerActivityEvent = {
	result : 0,
	constructionID : 0,
	eventID : 0,
    }

    static Unmarshal(buffer: Buffer): SSummerActivityEvent { 
	const reader = new BufferReader(buffer)
try{
	SSummerActivityEvent.DefaultData.result = reader.readInt32()
	SSummerActivityEvent.DefaultData.constructionID = reader.readInt32()
	SSummerActivityEvent.DefaultData.eventID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSummerActivityEvent.DefaultData);
    }

    static Marshal(data: SSummerActivityEvent): Buffer { 
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


export default SSummerActivityEvent;