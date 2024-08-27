
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFinishWitchSkillGuide {
	skillItemId : number;
}

class CFinishWitchSkillGuide {
    static DefaultData: CFinishWitchSkillGuide = {
	skillItemId : 0,
    }

    static Unmarshal(buffer: Buffer): CFinishWitchSkillGuide { 
	const reader = new BufferReader(buffer)
try{
	CFinishWitchSkillGuide.DefaultData.skillItemId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFinishWitchSkillGuide.DefaultData);
    }

    static Marshal(data: CFinishWitchSkillGuide): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.skillItemId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFinishWitchSkillGuide;