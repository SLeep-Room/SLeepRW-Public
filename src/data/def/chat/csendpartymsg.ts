
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import hyperlinks from '../../bean/chat/hyperlink';

interface CSendPartyMsg {
	partyId : bigint;
	msg : string;
	hyperlinks : typeof hyperlinks.DefaultData[];
}

class CSendPartyMsg {
    static DefaultData: CSendPartyMsg = {
	partyId : 0n,
	msg : "",
	hyperlinks : [],
    }

    static Unmarshal(buffer: Buffer): CSendPartyMsg { 
	const reader = new BufferReader(buffer)
try{
	CSendPartyMsg.DefaultData.partyId = reader.readInt64()
	CSendPartyMsg.DefaultData.msg = reader.readString()
	const hyperlinksLength = reader.readCompactUInt32();

	for (let i = 0; i < hyperlinksLength; i++) {
	    CSendPartyMsg.DefaultData.hyperlinks.push(hyperlinks.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSendPartyMsg.DefaultData);
    }

    static Marshal(data: CSendPartyMsg): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
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


export default CSendPartyMsg;