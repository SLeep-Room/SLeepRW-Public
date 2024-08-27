
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SendTopMessage {
	messageId : number;
	parameters : string[];
}

class SendTopMessage {
    static DefaultData: SendTopMessage = {
	messageId : 0,
	parameters : [],
    }

    static Unmarshal(buffer: BufferReader): SendTopMessage { 
	const reader = buffer
try{
	SendTopMessage.DefaultData.messageId = reader.readInt32()
	const parametersLength = reader.readCompactUInt32();

	for (let i = 0; i < parametersLength; i++) {
	    SendTopMessage.DefaultData.parameters.push(reader.readString());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SendTopMessage.DefaultData);
    }

    static Marshal(data: SendTopMessage): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.messageId)
	buffer.writeCompactInt32(Object.keys(data.parameters).length);
	data.parameters.forEach((value) => {
		buffer.writeString(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SendTopMessage;