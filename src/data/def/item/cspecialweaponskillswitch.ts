
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSpecialWeaponSkillSwitch {
	roleId : number;
}

class CSpecialWeaponSkillSwitch {
    static DefaultData: CSpecialWeaponSkillSwitch = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CSpecialWeaponSkillSwitch { 
	const reader = new BufferReader(buffer)
try{
	CSpecialWeaponSkillSwitch.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSpecialWeaponSkillSwitch.DefaultData);
    }

    static Marshal(data: CSpecialWeaponSkillSwitch): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSpecialWeaponSkillSwitch;