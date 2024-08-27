
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import hyperlinks from '../../bean/chat/hyperlink';

interface CSendChatMsg {
	channelType : number;
	msg : string;
	hyperlinks : typeof hyperlinks.DefaultData[];
}

class CSendChatMsg {
    static DefaultData: CSendChatMsg = {
	channelType : 0,
	msg : "",
	hyperlinks : [],
    }

    static Unmarshal(buffer: Buffer): CSendChatMsg { 
	const reader = new BufferReader(buffer)
try{
	CSendChatMsg.DefaultData.channelType = reader.readInt32()
	CSendChatMsg.DefaultData.msg = reader.readString()
	const hyperlinksLength = reader.readCompactUInt32();

	for (let i = 0; i < hyperlinksLength; i++) {
	    CSendChatMsg.DefaultData.hyperlinks.push(hyperlinks.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSendChatMsg.DefaultData);
    }

    static Marshal(data: CSendChatMsg): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.channelType)
	buffer.writeString(data.msg)
	buffer.writeCompactInt32(Object.keys(data.hyperlinks).length);
	data.hyperlinks.forEach((value) => {
		buffer.writeBuffer(hyperlinks.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSendChatMsg;