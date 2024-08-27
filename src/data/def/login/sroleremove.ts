
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRoleRemove {
	roleId : number;
}

class SRoleRemove {
    static DefaultData: SRoleRemove = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): SRoleRemove { 
	const reader = new BufferReader(buffer)
try{
	SRoleRemove.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleRemove.DefaultData);
    }

    static Marshal(data: SRoleRemove): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleRemove;