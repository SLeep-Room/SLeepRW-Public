
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import msgInfo from '../../bean/chat/msginfo';

interface SSendHistoryChatMsg {
	msgInfo : typeof msgInfo.DefaultData[];
}

class SSendHistoryChatMsg {
    static DefaultData: SSendHistoryChatMsg = {
	msgInfo : [],
    }

    static Unmarshal(buffer: Buffer): SSendHistoryChatMsg { 
	const reader = new BufferReader(buffer)
try{
	const msgInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < msgInfoLength; i++) {
	    SSendHistoryChatMsg.DefaultData.msgInfo.push(msgInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendHistoryChatMsg.DefaultData);
    }

    static Marshal(data: SSendHistoryChatMsg): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.msgInfo).length);
	data.msgInfo.forEach((value) => {
		buffer.writeBuffer(msgInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendHistoryChatMsg;