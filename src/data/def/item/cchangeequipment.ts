
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeEquipment {
	equipToRole : [number,number][];
}

class CChangeEquipment {
    static DefaultData: CChangeEquipment = {
	equipToRole : [],
    }

    static Unmarshal(buffer: Buffer): CChangeEquipment { 
	const reader = new BufferReader(buffer)
try{
	const equipToRoleLength = reader.readCompactUInt32();

	for (let i = 0; i < equipToRoleLength; i++) {
	    CChangeEquipment.DefaultData.equipToRole.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeEquipment.DefaultData);
    }

    static Marshal(data: CChangeEquipment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.equipToRole).length);
	data.equipToRole.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeEquipment;