
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Fighter {
	fightertype : number;
	id : number;
	attrs : [number,number][];
	baseSkill : number;
	skills : number[];
	passiveSkills : number[];
	deadtype : number;
	hpStrip : string;
	level : number;
	evolutionLevel : number;
	exclusiveLevel : number;
	equipSkills : number[];
	skinId : number;
	autoExploreSkill : number[];
	runeSkill : number[];
}

class Fighter {
    static DefaultData: Fighter = {
	fightertype : 0,
	id : 0,
	attrs : [],
	baseSkill : 0,
	skills : [],
	passiveSkills : [],
	deadtype : 0,
	hpStrip : "",
	level : 0,
	evolutionLevel : 0,
	exclusiveLevel : 0,
	equipSkills : [],
	skinId : 0,
	autoExploreSkill : [],
	runeSkill : [],
    }

    static Unmarshal(buffer: BufferReader): Fighter { 
	const reader = buffer
try{
	Fighter.DefaultData.fightertype = reader.readInt32()
	Fighter.DefaultData.id = reader.readInt32()
	const attrsLength = reader.readCompactUInt32();

	for (let i = 0; i < attrsLength; i++) {
	    Fighter.DefaultData.attrs.push([reader.readInt32(),reader.readInt32()]);
	}
	Fighter.DefaultData.baseSkill = reader.readInt32()
	const skillsLength = reader.readCompactUInt32();

	for (let i = 0; i < skillsLength; i++) {
	    Fighter.DefaultData.skills.push(reader.readInt32());
	}
	const passiveSkillsLength = reader.readCompactUInt32();

	for (let i = 0; i < passiveSkillsLength; i++) {
	    Fighter.DefaultData.passiveSkills.push(reader.readInt32());
	}
	Fighter.DefaultData.deadtype = reader.readInt32()
	Fighter.DefaultData.hpStrip = reader.readString()
	Fighter.DefaultData.level = reader.readInt32()
	Fighter.DefaultData.evolutionLevel = reader.readInt32()
	Fighter.DefaultData.exclusiveLevel = reader.readInt32()
	const equipSkillsLength = reader.readCompactUInt32();

	for (let i = 0; i < equipSkillsLength; i++) {
	    Fighter.DefaultData.equipSkills.push(reader.readInt32());
	}
	Fighter.DefaultData.skinId = reader.readInt32()
	const autoExploreSkillLength = reader.readCompactUInt32();

	for (let i = 0; i < autoExploreSkillLength; i++) {
	    Fighter.DefaultData.autoExploreSkill.push(reader.readInt32());
	}
	const runeSkillLength = reader.readCompactUInt32();

	for (let i = 0; i < runeSkillLength; i++) {
	    Fighter.DefaultData.runeSkill.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Fighter.DefaultData);
    }

    static Marshal(data: Fighter): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.fightertype)
	buffer.writeInt32(data.id)
	buffer.writeCompactInt32(Object.keys(data.attrs).length);
	data.attrs.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.baseSkill)
	buffer.writeCompactInt32(Object.keys(data.skills).length);
	data.skills.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.passiveSkills).length);
	data.passiveSkills.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.deadtype)
	buffer.writeString(data.hpStrip)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.evolutionLevel)
	buffer.writeInt32(data.exclusiveLevel)
	buffer.writeCompactInt32(Object.keys(data.equipSkills).length);
	data.equipSkills.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.skinId)
	buffer.writeCompactInt32(Object.keys(data.autoExploreSkill).length);
	data.autoExploreSkill.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.runeSkill).length);
	data.runeSkill.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Fighter;