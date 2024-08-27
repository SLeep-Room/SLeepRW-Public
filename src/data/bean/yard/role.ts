
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Role {
	roleId : number;
	energy : bigint;
}

class Role {
    static DefaultData: Role = {
	roleId : 0,
	energy : 0n,
    }

    static Unmarshal(buffer: BufferReader): Role { 
	const reader = buffer
try{
	Role.DefaultData.roleId = reader.readInt32()
	Role.DefaultData.energy = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Role.DefaultData);
    }

    static Marshal(data: Role): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt64(BigInt(data.energy))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Role;