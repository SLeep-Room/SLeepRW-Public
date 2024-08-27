
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAddRolesInRoom {
	floorId : number;
	roles : number[];
}

class CAddRolesInRoom {
    static DefaultData: CAddRolesInRoom = {
	floorId : 0,
	roles : [],
    }

    static Unmarshal(buffer: Buffer): CAddRolesInRoom { 
	const reader = new BufferReader(buffer)
try{
	CAddRolesInRoom.DefaultData.floorId = reader.readInt32()
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    CAddRolesInRoom.DefaultData.roles.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAddRolesInRoom.DefaultData);
    }

    static Marshal(data: CAddRolesInRoom): Buffer { 
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


export default CAddRolesInRoom;