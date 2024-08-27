
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUpdatePassiveSkill {
	roleId : number;
	oldSkillId : number;
	newSKillId : number;
}

class SUpdatePassiveSkill {
    static DefaultData: SUpdatePassiveSkill = {
	roleId : 0,
	oldSkillId : 0,
	newSKillId : 0,
    }

    static Unmarshal(buffer: Buffer): SUpdatePassiveSkill { 
	const reader = new BufferReader(buffer)
try{
	SUpdatePassiveSkill.DefaultData.roleId = reader.readInt32()
	SUpdatePassiveSkill.DefaultData.oldSkillId = reader.readInt32()
	SUpdatePassiveSkill.DefaultData.newSKillId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdatePassiveSkill.DefaultData);
    }

    static Marshal(data: SUpdatePassiveSkill): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.oldSkillId)
	buffer.writeInt32(data.newSKillId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdatePassiveSkill;