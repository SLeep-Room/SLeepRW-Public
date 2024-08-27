
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUpdateRolesStatus {
	roleStatus : [number,number][];
}

class SUpdateRolesStatus {
    static DefaultData: SUpdateRolesStatus = {
	roleStatus : [],
    }

    static Unmarshal(buffer: Buffer): SUpdateRolesStatus { 
	const reader = new BufferReader(buffer)
try{
	const roleStatusLength = reader.readCompactUInt32();

	for (let i = 0; i < roleStatusLength; i++) {
	    SUpdateRolesStatus.DefaultData.roleStatus.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateRolesStatus.DefaultData);
    }

    static Marshal(data: SUpdateRolesStatus): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roleStatus).length);
	data.roleStatus.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateRolesStatus;