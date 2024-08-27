
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SShowSpecialWeapon {
	roles : number[];
}

class SShowSpecialWeapon {
    static DefaultData: SShowSpecialWeapon = {
	roles : [],
    }

    static Unmarshal(buffer: Buffer): SShowSpecialWeapon { 
	const reader = new BufferReader(buffer)
try{
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    SShowSpecialWeapon.DefaultData.roles.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShowSpecialWeapon.DefaultData);
    }

    static Marshal(data: SShowSpecialWeapon): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShowSpecialWeapon;