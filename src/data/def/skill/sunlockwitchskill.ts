
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import skillItem from '../../bean/skill/beans/skillitem';

interface SUnlockWitchSkill {
	skillItem : typeof skillItem.DefaultData;
}

class SUnlockWitchSkill {
    static DefaultData: SUnlockWitchSkill = {
	skillItem : skillItem.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SUnlockWitchSkill { 
	const reader = new BufferReader(buffer)
try{
	SUnlockWitchSkill.DefaultData.skillItem = skillItem.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUnlockWitchSkill.DefaultData);
    }

    static Marshal(data: SUnlockWitchSkill): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(skillItem.Marshal(data.skillItem))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUnlockWitchSkill;