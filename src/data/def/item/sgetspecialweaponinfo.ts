
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetSpecialWeaponInfo {
	roleId : number;
	specialWeaponLevel : number;
	specialWeaponProperties : [number,number][];
	specialWeaponPropertiesForNextLevel : [number,number][];
	skillOpen : number;
}

class SGetSpecialWeaponInfo {
    static DefaultData: SGetSpecialWeaponInfo = {
	roleId : 0,
	specialWeaponLevel : 0,
	specialWeaponProperties : [],
	specialWeaponPropertiesForNextLevel : [],
	skillOpen : 0,
    }

    static Unmarshal(buffer: Buffer): SGetSpecialWeaponInfo { 
	const reader = new BufferReader(buffer)
try{
	SGetSpecialWeaponInfo.DefaultData.roleId = reader.readInt32()
	SGetSpecialWeaponInfo.DefaultData.specialWeaponLevel = reader.readInt32()
	const specialWeaponPropertiesLength = reader.readCompactUInt32();

	for (let i = 0; i < specialWeaponPropertiesLength; i++) {
	    SGetSpecialWeaponInfo.DefaultData.specialWeaponProperties.push([reader.readInt32(),reader.readInt32()]);
	}
	const specialWeaponPropertiesForNextLevelLength = reader.readCompactUInt32();

	for (let i = 0; i < specialWeaponPropertiesForNextLevelLength; i++) {
	    SGetSpecialWeaponInfo.DefaultData.specialWeaponPropertiesForNextLevel.push([reader.readInt32(),reader.readInt32()]);
	}
	SGetSpecialWeaponInfo.DefaultData.skillOpen = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetSpecialWeaponInfo.DefaultData);
    }

    static Marshal(data: SGetSpecialWeaponInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
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
	});
	buffer.writeInt32(data.skillOpen)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetSpecialWeaponInfo;