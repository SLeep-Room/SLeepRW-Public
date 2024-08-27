
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUseBackInviteCode {
	invitationCode : string;
}

class CUseBackInviteCode {
    static DefaultData: CUseBackInviteCode = {
	invitationCode : "",
    }

    static Unmarshal(buffer: Buffer): CUseBackInviteCode { 
	const reader = new BufferReader(buffer)
try{
	CUseBackInviteCode.DefaultData.invitationCode = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUseBackInviteCode.DefaultData);
    }

    static Marshal(data: CUseBackInviteCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.invitationCode)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUseBackInviteCode;