
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRenewRolesHPinTower {
	status : [number,number][];
}

class SRenewRolesHPinTower {
    static DefaultData: SRenewRolesHPinTower = {
	status : [],
    }

    static Unmarshal(buffer: Buffer): SRenewRolesHPinTower { 
	const reader = new BufferReader(buffer)
try{
	const statusLength = reader.readCompactUInt32();

	for (let i = 0; i < statusLength; i++) {
	    SRenewRolesHPinTower.DefaultData.status.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRenewRolesHPinTower.DefaultData);
    }

    static Marshal(data: SRenewRolesHPinTower): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.status).length);
	data.status.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRenewRolesHPinTower;