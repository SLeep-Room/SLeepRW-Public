
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenInviteShare {
	invitationCode : string;
	weekshare : number;
	inviteeNum : number;
	limitNum : number;
}

class SOpenInviteShare {
    static DefaultData: SOpenInviteShare = {
	invitationCode : "",
	weekshare : 0,
	inviteeNum : 0,
	limitNum : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenInviteShare { 
	const reader = new BufferReader(buffer)
try{
	SOpenInviteShare.DefaultData.invitationCode = reader.readString()
	SOpenInviteShare.DefaultData.weekshare = reader.readInt32()
	SOpenInviteShare.DefaultData.inviteeNum = reader.readInt32()
	SOpenInviteShare.DefaultData.limitNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenInviteShare.DefaultData);
    }

    static Marshal(data: SOpenInviteShare): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.invitationCode)
	buffer.writeInt32(data.weekshare)
	buffer.writeInt32(data.inviteeNum)
	buffer.writeInt32(data.limitNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenInviteShare;