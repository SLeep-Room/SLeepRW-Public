
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUnlcokRoleIcon {
	roleId : number;
	roleNum : number;
}

class SUnlcokRoleIcon {
    static DefaultData: SUnlcokRoleIcon = {
	roleId : 0,
	roleNum : 0,
    }

    static Unmarshal(buffer: Buffer): SUnlcokRoleIcon { 
	const reader = new BufferReader(buffer)
try{
	SUnlcokRoleIcon.DefaultData.roleId = reader.readInt32()
	SUnlcokRoleIcon.DefaultData.roleNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUnlcokRoleIcon.DefaultData);
    }

    static Marshal(data: SUnlcokRoleIcon): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.roleNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUnlcokRoleIcon;