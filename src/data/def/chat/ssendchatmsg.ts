
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import baseUserData from '../../bean/chat/baseuserdata';
import hyperlinks from '../../bean/chat/hyperlink';

interface SSendChatMsg {
	baseUserData : typeof baseUserData.DefaultData;
	channelType : number;
	msg : string;
	severId : number;
	hyperlinks : typeof hyperlinks.DefaultData[];
}

class SSendChatMsg {
    static DefaultData: SSendChatMsg = {
	baseUserData : baseUserData.DefaultData,
	channelType : 0,
	msg : "",
	severId : 0,
	hyperlinks : [],
    }

    static Unmarshal(buffer: Buffer): SSendChatMsg { 
	const reader = new BufferReader(buffer)
try{
	SSendChatMsg.DefaultData.baseUserData = baseUserData.Unmarshal(reader)
	SSendChatMsg.DefaultData.channelType = reader.readInt32()
	SSendChatMsg.DefaultData.msg = reader.readString()
	SSendChatMsg.DefaultData.severId = reader.readInt32()
	const hyperlinksLength = reader.readCompactUInt32();

	for (let i = 0; i < hyperlinksLength; i++) {
	    SSendChatMsg.DefaultData.hyperlinks.push(hyperlinks.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendChatMsg.DefaultData);
    }

    static Marshal(data: SSendChatMsg): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(baseUserData.Marshal(data.baseUserData))
	buffer.writeInt32(data.channelType)
	buffer.writeString(data.msg)
	buffer.writeInt32(data.severId)
	buffer.writeCompactInt32(Object.keys(data.hyperlinks).length);
	data.hyperlinks.forEach((value) => {
		buffer.writeBuffer(hyperlinks.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendChatMsg;