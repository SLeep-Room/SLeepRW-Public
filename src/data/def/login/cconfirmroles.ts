
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CConfirmRoles {
	lineupId : number;
	roles : [number,number][];
}

class CConfirmRoles {
    static DefaultData: CConfirmRoles = {
	lineupId : 0,
	roles : [],
    }

    static Unmarshal(buffer: Buffer): CConfirmRoles { 
	const reader = new BufferReader(buffer)
try{
	CConfirmRoles.DefaultData.lineupId = reader.readInt32()
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    CConfirmRoles.DefaultData.roles.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CConfirmRoles.DefaultData);
    }

    static Marshal(data: CConfirmRoles): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lineupId)
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CConfirmRoles;