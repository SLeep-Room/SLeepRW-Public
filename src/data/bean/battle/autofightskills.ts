
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import orderSKill from '../../bean/battle/chosenskill';
import disorderSkill from '../../bean/battle/chosenskill';

interface AutoFightSkills {
	autoFight : number;
	orderSKill : typeof orderSKill.DefaultData;
	disorderSkill : typeof disorderSkill.DefaultData;
	eruptSkill : [number,number][];
	speed : number;
	lock : number;
}

class AutoFightSkills {
    static DefaultData: AutoFightSkills = {
	autoFight : 0,
	orderSKill : orderSKill.DefaultData,
	disorderSkill : disorderSkill.DefaultData,
	eruptSkill : [],
	speed : 0,
	lock : 0,
    }

    static Unmarshal(buffer: BufferReader): AutoFightSkills { 
	const reader = buffer
try{
	AutoFightSkills.DefaultData.autoFight = reader.readInt16()
	AutoFightSkills.DefaultData.orderSKill = orderSKill.Unmarshal(reader)
	AutoFightSkills.DefaultData.disorderSkill = disorderSkill.Unmarshal(reader)
	const eruptSkillLength = reader.readCompactUInt32();

	for (let i = 0; i < eruptSkillLength; i++) {
	    AutoFightSkills.DefaultData.eruptSkill.push([reader.readInt32(),reader.readInt32()]);
	}
	AutoFightSkills.DefaultData.speed = reader.readFloat32()
	AutoFightSkills.DefaultData.lock = reader.readInt16()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},AutoFightSkills.DefaultData);
    }

    static Marshal(data: AutoFightSkills): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt16(data.autoFight)
	buffer.writeBuffer(orderSKill.Marshal(data.orderSKill))
	buffer.writeBuffer(disorderSkill.Marshal(data.disorderSkill))
	buffer.writeCompactInt32(Object.keys(data.eruptSkill).length);
	data.eruptSkill.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeFloat32(data.speed)
	buffer.writeInt16(data.lock)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default AutoFightSkills;