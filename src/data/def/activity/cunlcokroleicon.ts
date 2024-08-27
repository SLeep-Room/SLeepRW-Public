
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUnlcokRoleIcon {
	roleId : number;
}

class CUnlcokRoleIcon {
    static DefaultData: CUnlcokRoleIcon = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CUnlcokRoleIcon { 
	const reader = new BufferReader(buffer)
try{
	CUnlcokRoleIcon.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUnlcokRoleIcon.DefaultData);
    }

    static Marshal(data: CUnlcokRoleIcon): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUnlcokRoleIcon;