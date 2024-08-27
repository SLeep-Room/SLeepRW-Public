
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import role from '../../bean/login/role';

interface SRoleAdd {
	role : typeof role.DefaultData;
}

class SRoleAdd {
    static DefaultData: SRoleAdd = {
	role : role.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRoleAdd { 
	const reader = new BufferReader(buffer)
try{
	SRoleAdd.DefaultData.role = role.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleAdd.DefaultData);
    }

    static Marshal(data: SRoleAdd): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(role.Marshal(data.role))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleAdd;