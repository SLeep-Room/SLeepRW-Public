
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import baseUserData from '../../bean/chat/baseuserdata';
import hyperlinks from '../../bean/chat/hyperlink';

interface MsgInfo {
	baseUserData : typeof baseUserData.DefaultData;
	position : number;
	sendTime : bigint;
	msgType : number;
	msg : string;
	hyperlinks : typeof hyperlinks.DefaultData[];
}

class MsgInfo {
    static DefaultData: MsgInfo = {
	baseUserData : baseUserData.DefaultData,
	position : 0,
	sendTime : 0n,
	msgType : 0,
	msg : "",
	hyperlinks : [],
    }

    static Unmarshal(buffer: BufferReader): MsgInfo { 
	const reader = buffer
try{
	MsgInfo.DefaultData.baseUserData = baseUserData.Unmarshal(reader)
	MsgInfo.DefaultData.position = reader.readInt32()
	MsgInfo.DefaultData.sendTime = reader.readInt64()
	MsgInfo.DefaultData.msgType = reader.readInt32()
	MsgInfo.DefaultData.msg = reader.readString()
	const hyperlinksLength = reader.readCompactUInt32();

	for (let i = 0; i < hyperlinksLength; i++) {
	    MsgInfo.DefaultData.hyperlinks.push(hyperlinks.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},MsgInfo.DefaultData);
    }

    static Marshal(data: MsgInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(baseUserData.Marshal(data.baseUserData))
	buffer.writeInt32(data.position)
	buffer.writeInt64(BigInt(data.sendTime))
	buffer.writeInt32(data.msgType)
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


export default MsgInfo;