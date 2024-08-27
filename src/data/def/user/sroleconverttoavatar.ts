
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRoleConvertToAvatar {
	avatarId : number;
}

class SRoleConvertToAvatar {
    static DefaultData: SRoleConvertToAvatar = {
	avatarId : 0,
    }

    static Unmarshal(buffer: Buffer): SRoleConvertToAvatar { 
	const reader = new BufferReader(buffer)
try{
	SRoleConvertToAvatar.DefaultData.avatarId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleConvertToAvatar.DefaultData);
    }

    static Marshal(data: SRoleConvertToAvatar): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.avatarId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleConvertToAvatar;