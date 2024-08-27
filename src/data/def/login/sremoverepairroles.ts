
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import deadRoles from '../../bean/login/deadrole';

interface SRemoveRepairRoles {
	deadRoles : typeof deadRoles.DefaultData[];
}

class SRemoveRepairRoles {
    static DefaultData: SRemoveRepairRoles = {
	deadRoles : [],
    }

    static Unmarshal(buffer: Buffer): SRemoveRepairRoles { 
	const reader = new BufferReader(buffer)
try{
	const deadRolesLength = reader.readCompactUInt32();

	for (let i = 0; i < deadRolesLength; i++) {
	    SRemoveRepairRoles.DefaultData.deadRoles.push(deadRoles.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRemoveRepairRoles.DefaultData);
    }

    static Marshal(data: SRemoveRepairRoles): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.deadRoles).length);
	data.deadRoles.forEach((value) => {
		buffer.writeBuffer(deadRoles.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRemoveRepairRoles;