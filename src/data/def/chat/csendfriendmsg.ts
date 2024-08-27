
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import hyperlinks from '../../bean/chat/hyperlink';

interface CSendFriendMsg {
	userId : bigint;
	msg : string;
	hyperlinks : typeof hyperlinks.DefaultData[];
}

class CSendFriendMsg {
    static DefaultData: CSendFriendMsg = {
	userId : 0n,
	msg : "",
	hyperlinks : [],
    }

    static Unmarshal(buffer: Buffer): CSendFriendMsg { 
	const reader = new BufferReader(buffer)
try{
	CSendFriendMsg.DefaultData.userId = reader.readInt64()
	CSendFriendMsg.DefaultData.msg = reader.readString()
	const hyperlinksLength = reader.readCompactUInt32();

	for (let i = 0; i < hyperlinksLength; i++) {
	    CSendFriendMsg.DefaultData.hyperlinks.push(hyperlinks.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSendFriendMsg.DefaultData);
    }

    static Marshal(data: CSendFriendMsg): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))
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


export default CSendFriendMsg;