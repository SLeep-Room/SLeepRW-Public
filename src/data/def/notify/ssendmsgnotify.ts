
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendMsgNotify {
	msgId : number;
	parameters : string[];
}

class SSendMsgNotify {
    static DefaultData: SSendMsgNotify = {
	msgId : 0,
	parameters : [],
    }

    static Unmarshal(buffer: Buffer): SSendMsgNotify { 
	const reader = new BufferReader(buffer)
try{
	SSendMsgNotify.DefaultData.msgId = reader.readInt32()
	const parametersLength = reader.readCompactUInt32();

	for (let i = 0; i < parametersLength; i++) {
	    SSendMsgNotify.DefaultData.parameters.push(reader.readString());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendMsgNotify.DefaultData);
    }

    static Marshal(data: SSendMsgNotify): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.msgId)
	buffer.writeCompactInt32(Object.keys(data.parameters).length);
	data.parameters.forEach((value) => {
		buffer.writeString(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendMsgNotify;