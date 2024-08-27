
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSpecialWeaponSkillSwitch {
	roleId : number;
	skillOpen : number;
}

class SSpecialWeaponSkillSwitch {
    static DefaultData: SSpecialWeaponSkillSwitch = {
	roleId : 0,
	skillOpen : 0,
    }

    static Unmarshal(buffer: Buffer): SSpecialWeaponSkillSwitch { 
	const reader = new BufferReader(buffer)
try{
	SSpecialWeaponSkillSwitch.DefaultData.roleId = reader.readInt32()
	SSpecialWeaponSkillSwitch.DefaultData.skillOpen = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSpecialWeaponSkillSwitch.DefaultData);
    }

    static Marshal(data: SSpecialWeaponSkillSwitch): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.skillOpen)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSpecialWeaponSkillSwitch;