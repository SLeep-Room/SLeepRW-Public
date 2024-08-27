
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import deadRoles from '../../bean/login/deadrole';

interface SAddDeadRoles {
	deadRoles : typeof deadRoles.DefaultData[];
}

class SAddDeadRoles {
    static DefaultData: SAddDeadRoles = {
	deadRoles : [],
    }

    static Unmarshal(buffer: Buffer): SAddDeadRoles { 
	const reader = new BufferReader(buffer)
try{
	const deadRolesLength = reader.readCompactUInt32();

	for (let i = 0; i < deadRolesLength; i++) {
	    SAddDeadRoles.DefaultData.deadRoles.push(deadRoles.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddDeadRoles.DefaultData);
    }

    static Marshal(data: SAddDeadRoles): Buffer { 
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


export default SAddDeadRoles;