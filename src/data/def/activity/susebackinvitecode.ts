
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUseBackInviteCode {
	result : number;
}

class SUseBackInviteCode {
    static DefaultData: SUseBackInviteCode = {
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SUseBackInviteCode { 
	const reader = new BufferReader(buffer)
try{
	SUseBackInviteCode.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUseBackInviteCode.DefaultData);
    }

    static Marshal(data: SUseBackInviteCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUseBackInviteCode;