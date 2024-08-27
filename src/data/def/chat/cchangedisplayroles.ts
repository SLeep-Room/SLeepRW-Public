
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeDisplayRoles {
	roleIds : number[];
}

class CChangeDisplayRoles {
    static DefaultData: CChangeDisplayRoles = {
	roleIds : [],
    }

    static Unmarshal(buffer: Buffer): CChangeDisplayRoles { 
	const reader = new BufferReader(buffer)
try{
	const roleIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < roleIdsLength; i++) {
	    CChangeDisplayRoles.DefaultData.roleIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeDisplayRoles.DefaultData);
    }

    static Marshal(data: CChangeDisplayRoles): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roleIds).length);
	data.roleIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeDisplayRoles;