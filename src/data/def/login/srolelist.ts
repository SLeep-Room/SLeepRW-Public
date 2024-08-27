
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import roles from '../../bean/login/role';

interface SRoleList {
	roles : typeof roles.DefaultData[];
	capacity : number;
}

class SRoleList {
    static DefaultData: SRoleList = {
	roles : [],
	capacity : 0,
    }

    static Unmarshal(buffer: Buffer): SRoleList { 
	const reader = new BufferReader(buffer)
try{
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    SRoleList.DefaultData.roles.push(roles.Unmarshal(reader));
	}
	SRoleList.DefaultData.capacity = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleList.DefaultData);
    }

    static Marshal(data: SRoleList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach((value) => {
		buffer.writeBuffer(roles.Marshal(value))
	});
	buffer.writeInt32(data.capacity)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleList;