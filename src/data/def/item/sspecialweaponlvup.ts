
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSpecialWeaponlvUp {
	roleId : number;
	result : number;
	specialWeaponLevel : number;
	specialWeaponProperties : [number,number][];
	specialWeaponPropertiesForNextLevel : [number,number][];
}

class SSpecialWeaponlvUp {
    static DefaultData: SSpecialWeaponlvUp = {
	roleId : 0,
	result : 0,
	specialWeaponLevel : 0,
	specialWeaponProperties : [],
	specialWeaponPropertiesForNextLevel : [],
    }

    static Unmarshal(buffer: Buffer): SSpecialWeaponlvUp { 
	const reader = new BufferReader(buffer)
try{
	SSpecialWeaponlvUp.DefaultData.roleId = reader.readInt32()
	SSpecialWeaponlvUp.DefaultData.result = reader.readInt32()
	SSpecialWeaponlvUp.DefaultData.specialWeaponLevel = reader.readInt32()
	const specialWeaponPropertiesLength = reader.readCompactUInt32();

	for (let i = 0; i < specialWeaponPropertiesLength; i++) {
	    SSpecialWeaponlvUp.DefaultData.specialWeaponProperties.push([reader.readInt32(),reader.readInt32()]);
	}
	const specialWeaponPropertiesForNextLevelLength = reader.readCompactUInt32();

	for (let i = 0; i < specialWeaponPropertiesForNextLevelLength; i++) {
	    SSpecialWeaponlvUp.DefaultData.specialWeaponPropertiesForNextLevel.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSpecialWeaponlvUp.DefaultData);
    }

    static Marshal(data: SSpecialWeaponlvUp): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.specialWeaponLevel)
	buffer.writeCompactInt32(Object.keys(data.specialWeaponProperties).length);
	data.specialWeaponProperties.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.specialWeaponPropertiesForNextLevel).length);
	data.specialWeaponPropertiesForNextLevel.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSpecialWeaponlvUp;