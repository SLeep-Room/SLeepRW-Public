
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUseInvitationCode {
	invitationCode : string;
}

class CUseInvitationCode {
    static DefaultData: CUseInvitationCode = {
	invitationCode : "",
    }

    static Unmarshal(buffer: Buffer): CUseInvitationCode { 
	const reader = new BufferReader(buffer)
try{
	CUseInvitationCode.DefaultData.invitationCode = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUseInvitationCode.DefaultData);
    }

    static Marshal(data: CUseInvitationCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.invitationCode)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUseInvitationCode;