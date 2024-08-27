
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import contractSkill from '../../bean/skill/beans/skillitem';

interface SupportRoleForShow {
	id : number;
	breakLv : number;
	lv : number;
	skin : number;
	contractSkill : typeof contractSkill.DefaultData[];
}

class SupportRoleForShow {
    static DefaultData: SupportRoleForShow = {
	id : 0,
	breakLv : 0,
	lv : 0,
	skin : 0,
	contractSkill : [],
    }

    static Unmarshal(buffer: BufferReader): SupportRoleForShow { 
	const reader = buffer
try{
	SupportRoleForShow.DefaultData.id = reader.readInt32()
	SupportRoleForShow.DefaultData.breakLv = reader.readInt16()
	SupportRoleForShow.DefaultData.lv = reader.readInt16()
	SupportRoleForShow.DefaultData.skin = reader.readInt32()
	const contractSkillLength = reader.readCompactUInt32();

	for (let i = 0; i < contractSkillLength; i++) {
	    SupportRoleForShow.DefaultData.contractSkill.push(contractSkill.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SupportRoleForShow.DefaultData);
    }

    static Marshal(data: SupportRoleForShow): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt16(data.breakLv)
	buffer.writeInt16(data.lv)
	buffer.writeInt32(data.skin)
	buffer.writeCompactInt32(Object.keys(data.contractSkill).length);
	data.contractSkill.forEach((value) => {
		buffer.writeBuffer(contractSkill.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SupportRoleForShow;