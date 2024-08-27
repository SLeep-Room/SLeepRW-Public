
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAddRoleInMagicTree {
	roleIds : number[];
}

class CAddRoleInMagicTree {
    static DefaultData: CAddRoleInMagicTree = {
	roleIds : [],
    }

    static Unmarshal(buffer: Buffer): CAddRoleInMagicTree { 
	const reader = new BufferReader(buffer)
try{
	const roleIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < roleIdsLength; i++) {
	    CAddRoleInMagicTree.DefaultData.roleIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAddRoleInMagicTree.DefaultData);
    }

    static Marshal(data: CAddRoleInMagicTree): Buffer { 
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


export default CAddRoleInMagicTree;