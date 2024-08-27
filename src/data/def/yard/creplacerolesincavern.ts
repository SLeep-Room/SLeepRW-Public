
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReplaceRolesInCavern {
	id : number;
	roleIds : number[];
}

class CReplaceRolesInCavern {
    static DefaultData: CReplaceRolesInCavern = {
	id : 0,
	roleIds : [],
    }

    static Unmarshal(buffer: Buffer): CReplaceRolesInCavern { 
	const reader = new BufferReader(buffer)
try{
	CReplaceRolesInCavern.DefaultData.id = reader.readInt32()
	const roleIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < roleIdsLength; i++) {
	    CReplaceRolesInCavern.DefaultData.roleIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReplaceRolesInCavern.DefaultData);
    }

    static Marshal(data: CReplaceRolesInCavern): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeCompactInt32(Object.keys(data.roleIds).length);
	data.roleIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReplaceRolesInCavern;