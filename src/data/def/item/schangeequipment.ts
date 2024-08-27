
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeEquipment {
	equips : [number,number][];
	roles : [number,number][];
	equipType : [number,number][];
}

class SChangeEquipment {
    static DefaultData: SChangeEquipment = {
	equips : [],
	roles : [],
	equipType : [],
    }

    static Unmarshal(buffer: Buffer): SChangeEquipment { 
	const reader = new BufferReader(buffer)
try{
	const equipsLength = reader.readCompactUInt32();

	for (let i = 0; i < equipsLength; i++) {
	    SChangeEquipment.DefaultData.equips.push([reader.readInt32(),reader.readInt32()]);
	}
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    SChangeEquipment.DefaultData.roles.push([reader.readInt32(),reader.readInt32()]);
	}
	const equipTypeLength = reader.readCompactUInt32();

	for (let i = 0; i < equipTypeLength; i++) {
	    SChangeEquipment.DefaultData.equipType.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeEquipment.DefaultData);
    }

    static Marshal(data: SChangeEquipment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.equips).length);
	data.equips.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.equipType).length);
	data.equipType.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeEquipment;