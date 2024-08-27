
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ChosenSkill {
	roleId : number;
	skillId : number;
}

class ChosenSkill {
    static DefaultData: ChosenSkill = {
	roleId : 0,
	skillId : 0,
    }

    static Unmarshal(buffer: BufferReader): ChosenSkill { 
	const reader = buffer
try{
	ChosenSkill.DefaultData.roleId = reader.readInt32()
	ChosenSkill.DefaultData.skillId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ChosenSkill.DefaultData);
    }

    static Marshal(data: ChosenSkill): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.skillId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ChosenSkill;