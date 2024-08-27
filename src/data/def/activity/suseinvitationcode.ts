
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUseInvitationCode {
	result : number;
	invitationCode : string;
}

class SUseInvitationCode {
    static DefaultData: SUseInvitationCode = {
	result : 0,
	invitationCode : "",
    }

    static Unmarshal(buffer: Buffer): SUseInvitationCode { 
	const reader = new BufferReader(buffer)
try{
	SUseInvitationCode.DefaultData.result = reader.readInt32()
	SUseInvitationCode.DefaultData.invitationCode = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUseInvitationCode.DefaultData);
    }

    static Marshal(data: SUseInvitationCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeString(data.invitationCode)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUseInvitationCode;