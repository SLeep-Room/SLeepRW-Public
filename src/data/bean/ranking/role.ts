
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import contractSkill from '../../bean/skill/beans/skillitem';
import passiveskill from '../../bean/login/passiveskill';
import equips from '../../bean/ranking/equipment';

interface Role {
	id : number;
	breakLv : number;
	lv : number;
	properties : [number,number][];
	contractSkill : typeof contractSkill.DefaultData[];
	passiveskill : typeof passiveskill.DefaultData[];
	equips : [number,typeof equips.DefaultData][];
	evolution : number;
	curLvBasePro : [number,number][];
	power : number;
	skin : number;
	specialWeaponLevel : number;
	runeLevel : number;
}

class Role {
    static DefaultData: Role = {
	id : 0,
	breakLv : 0,
	lv : 0,
	properties : [],
	contractSkill : [],
	passiveskill : [],
	equips : [],
	evolution : 0,
	curLvBasePro : [],
	power : 0,
	skin : 0,
	specialWeaponLevel : 0,
	runeLevel : 0,
    }

    static Unmarshal(buffer: BufferReader): Role { 
	const reader = buffer
try{
	Role.DefaultData.id = reader.readInt32()
	Role.DefaultData.breakLv = reader.readInt16()
	Role.DefaultData.lv = reader.readInt16()
	const propertiesLength = reader.readCompactUInt32();

	for (let i = 0; i < propertiesLength; i++) {
	    Role.DefaultData.properties.push([reader.readInt32(),reader.readInt32()]);
	}
	const contractSkillLength = reader.readCompactUInt32();

	for (let i = 0; i < contractSkillLength; i++) {
	    Role.DefaultData.contractSkill.push(contractSkill.Unmarshal(reader));
	}
	const passiveskillLength = reader.readCompactUInt32();

	for (let i = 0; i < passiveskillLength; i++) {
	    Role.DefaultData.passiveskill.push(passiveskill.Unmarshal(reader));
	}
	const equipsLength = reader.readCompactUInt32();

	for (let i = 0; i < equipsLength; i++) {
	    Role.DefaultData.equips.push([reader.readInt32(),equips.Unmarshal(reader)]);
	}
	Role.DefaultData.evolution = reader.readInt16()
	const curLvBaseProLength = reader.readCompactUInt32();

	for (let i = 0; i < curLvBaseProLength; i++) {
	    Role.DefaultData.curLvBasePro.push([reader.readInt32(),reader.readInt32()]);
	}
	Role.DefaultData.power = reader.readInt32()
	Role.DefaultData.skin = reader.readInt32()
	Role.DefaultData.specialWeaponLevel = reader.readInt32()
	Role.DefaultData.runeLevel = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Role.DefaultData);
    }

    static Marshal(data: Role): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt16(data.breakLv)
	buffer.writeInt16(data.lv)
	buffer.writeCompactInt32(Object.keys(data.properties).length);
	data.properties.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.contractSkill).length);
	data.contractSkill.forEach((value) => {
		buffer.writeBuffer(contractSkill.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.passiveskill).length);
	data.passiveskill.forEach((value) => {
		buffer.writeBuffer(passiveskill.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.equips).length);
	data.equips.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(equips.Marshal(value))
	});
	buffer.writeInt16(data.evolution)
	buffer.writeCompactInt32(Object.keys(data.curLvBasePro).length);
	data.curLvBasePro.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.power)
	buffer.writeInt32(data.skin)
	buffer.writeInt32(data.specialWeaponLevel)
	buffer.writeInt32(data.runeLevel)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Role;