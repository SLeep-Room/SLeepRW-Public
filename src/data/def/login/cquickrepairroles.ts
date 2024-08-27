
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CQuickRepairRoles {
	roleIds : number[];
}

class CQuickRepairRoles {
    static DefaultData: CQuickRepairRoles = {
	roleIds : [],
    }

    static Unmarshal(buffer: Buffer): CQuickRepairRoles { 
	const reader = new BufferReader(buffer)
try{
	const roleIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < roleIdsLength; i++) {
	    CQuickRepairRoles.DefaultData.roleIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CQuickRepairRoles.DefaultData);
    }

    static Marshal(data: CQuickRepairRoles): Buffer { 
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


export default CQuickRepairRoles;