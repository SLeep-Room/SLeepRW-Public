
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import contractSkill from '../../bean/skill/beans/skillitem';
import passiveskill from '../../bean/login/passiveskill';
import suitSkills from '../../bean/login/suitskill';

interface Role {
	isLeader : number;
	id : number;
	birthday : bigint;
	breakLv : number;
	lv : number;
	exp : bigint;
	lock : number;
	properties : [number,number][];
	contractSkill : typeof contractSkill.DefaultData[];
	passiveskill : typeof passiveskill.DefaultData[];
	equips : [number,number][];
	preSetEquips : [number,number][];
	evolution : number;
	curLvBasePro : [number,number][];
	nextLvBasePro : [number,number][];
	breakLvRange : number[];
	nextEvolutionLvBasePro : [number,number][];
	power : number;
	energy : number;
	redDot : number;
	relationLevel : number;
	skin : number;
	goodProgress : number;
	receiveList : number[];
	unlockedNode : number[];
	suitSkills : [number,typeof suitSkills.DefaultData][];
	specialWeaponLevel : number;
	addPercent : [number,number][];
	runeLevel : number;
}

class Role {
    static DefaultData: Role = {
	isLeader : 0,
	id : 0,
	birthday : 0n,
	breakLv : 0,
	lv : 0,
	exp : 0n,
	lock : 0,
	properties : [],
	contractSkill : [],
	passiveskill : [],
	equips : [],
	preSetEquips : [],
	evolution : 0,
	curLvBasePro : [],
	nextLvBasePro : [],
	breakLvRange : [],
	nextEvolutionLvBasePro : [],
	power : 0,
	energy : 0,
	redDot : 0,
	relationLevel : 0,
	skin : 0,
	goodProgress : 0,
	receiveList : [],
	unlockedNode : [],
	suitSkills : [],
	specialWeaponLevel : 0,
	addPercent : [],
	runeLevel : 0,
    }

    static Unmarshal(buffer: BufferReader): Role { 
	const reader = buffer
try{
	Role.DefaultData.isLeader = reader.readInt16()
	Role.DefaultData.id = reader.readInt32()
	Role.DefaultData.birthday = reader.readInt64()
	Role.DefaultData.breakLv = reader.readInt16()
	Role.DefaultData.lv = reader.readInt16()
	Role.DefaultData.exp = reader.readInt64()
	Role.DefaultData.lock = reader.readInt16()
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
	    Role.DefaultData.equips.push([reader.readInt32(),reader.readInt32()]);
	}
	const preSetEquipsLength = reader.readCompactUInt32();

	for (let i = 0; i < preSetEquipsLength; i++) {
	    Role.DefaultData.preSetEquips.push([reader.readInt32(),reader.readInt32()]);
	}
	Role.DefaultData.evolution = reader.readInt16()
	const curLvBaseProLength = reader.readCompactUInt32();

	for (let i = 0; i < curLvBaseProLength; i++) {
	    Role.DefaultData.curLvBasePro.push([reader.readInt32(),reader.readInt32()]);
	}
	const nextLvBaseProLength = reader.readCompactUInt32();

	for (let i = 0; i < nextLvBaseProLength; i++) {
	    Role.DefaultData.nextLvBasePro.push([reader.readInt32(),reader.readInt32()]);
	}
	const breakLvRangeLength = reader.readCompactUInt32();

	for (let i = 0; i < breakLvRangeLength; i++) {
	    Role.DefaultData.breakLvRange.push(reader.readInt32());
	}
	const nextEvolutionLvBaseProLength = reader.readCompactUInt32();

	for (let i = 0; i < nextEvolutionLvBaseProLength; i++) {
	    Role.DefaultData.nextEvolutionLvBasePro.push([reader.readInt32(),reader.readInt32()]);
	}
	Role.DefaultData.power = reader.readInt32()
	Role.DefaultData.energy = reader.readInt32()
	Role.DefaultData.redDot = reader.readInt16()
	Role.DefaultData.relationLevel = reader.readInt32()
	Role.DefaultData.skin = reader.readInt32()
	Role.DefaultData.goodProgress = reader.readInt32()
	const receiveListLength = reader.readCompactUInt32();

	for (let i = 0; i < receiveListLength; i++) {
	    Role.DefaultData.receiveList.push(reader.readInt32());
	}
	const unlockedNodeLength = reader.readCompactUInt32();

	for (let i = 0; i < unlockedNodeLength; i++) {
	    Role.DefaultData.unlockedNode.push(reader.readInt32());
	}
	const suitSkillsLength = reader.readCompactUInt32();

	for (let i = 0; i < suitSkillsLength; i++) {
	    Role.DefaultData.suitSkills.push([reader.readInt32(),suitSkills.Unmarshal(reader)]);
	}
	Role.DefaultData.specialWeaponLevel = reader.readInt32()
	const addPercentLength = reader.readCompactUInt32();

	for (let i = 0; i < addPercentLength; i++) {
	    Role.DefaultData.addPercent.push([reader.readInt32(),reader.readInt32()]);
	}
	Role.DefaultData.runeLevel = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Role.DefaultData);
    }

    static Marshal(data: Role): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt16(data.isLeader)
	buffer.writeInt32(data.id)
	buffer.writeInt64(BigInt(data.birthday))
	buffer.writeInt16(data.breakLv)
	buffer.writeInt16(data.lv)
	buffer.writeInt64(BigInt(data.exp))
	buffer.writeInt16(data.lock)
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
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.preSetEquips).length);
	data.preSetEquips.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt16(data.evolution)
	buffer.writeCompactInt32(Object.keys(data.curLvBasePro).length);
	data.curLvBasePro.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.nextLvBasePro).length);
	data.nextLvBasePro.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.breakLvRange).length);
	data.breakLvRange.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.nextEvolutionLvBasePro).length);
	data.nextEvolutionLvBasePro.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.power)
	buffer.writeInt32(data.energy)
	buffer.writeInt16(data.redDot)
	buffer.writeInt32(data.relationLevel)
	buffer.writeInt32(data.skin)
	buffer.writeInt32(data.goodProgress)
	buffer.writeCompactInt32(Object.keys(data.receiveList).length);
	data.receiveList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.unlockedNode).length);
	data.unlockedNode.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.suitSkills).length);
	data.suitSkills.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(suitSkills.Marshal(value))
	});
	buffer.writeInt32(data.specialWeaponLevel)
	buffer.writeCompactInt32(Object.keys(data.addPercent).length);
	data.addPercent.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.runeLevel)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Role;