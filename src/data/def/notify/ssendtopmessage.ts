
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendTopMessage {
	messageId : number;
	parameters : string[];
}

class SSendTopMessage {
    static DefaultData: SSendTopMessage = {
	messageId : 0,
	parameters : [],
    }

    static Unmarshal(buffer: Buffer): SSendTopMessage { 
	const reader = new BufferReader(buffer)
try{
	SSendTopMessage.DefaultData.messageId = reader.readInt32()
	const parametersLength = reader.readCompactUInt32();

	for (let i = 0; i < parametersLength; i++) {
	    SSendTopMessage.DefaultData.parameters.push(reader.readString());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendTopMessage.DefaultData);
    }

    static Marshal(data: SSendTopMessage): Buffer { 
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


export default SSendTopMessage;