
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import msgInfo from '../../bean/chat/msginfo';

interface SSendPartyMsg {
	msgInfo : typeof msgInfo.DefaultData;
}

class SSendPartyMsg {
    static DefaultData: SSendPartyMsg = {
	msgInfo : msgInfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SSendPartyMsg { 
	const reader = new BufferReader(buffer)
try{
	SSendPartyMsg.DefaultData.msgInfo = msgInfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendPartyMsg.DefaultData);
    }

    static Marshal(data: SSendPartyMsg): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(msgInfo.Marshal(data.msgInfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendPartyMsg;