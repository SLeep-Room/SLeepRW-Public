
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface RoleToFloor {
	floorId : number;
	roles : number[];
}

class RoleToFloor {
    static DefaultData: RoleToFloor = {
	floorId : 0,
	roles : [],
    }

    static Unmarshal(buffer: BufferReader): RoleToFloor { 
	const reader = buffer
try{
	RoleToFloor.DefaultData.floorId = reader.readInt32()
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    RoleToFloor.DefaultData.roles.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},RoleToFloor.DefaultData);
    }

    static Marshal(data: RoleToFloor): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.floorId)
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default RoleToFloor;