
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshWitchSkills {
	changedSkills : [number,number][];
}

class SRefreshWitchSkills {
    static DefaultData: SRefreshWitchSkills = {
	changedSkills : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshWitchSkills { 
	const reader = new BufferReader(buffer)
try{
	const changedSkillsLength = reader.readCompactUInt32();

	for (let i = 0; i < changedSkillsLength; i++) {
	    SRefreshWitchSkills.DefaultData.changedSkills.push([reader.readInt32(),reader.readInt16()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshWitchSkills.DefaultData);
    }

    static Marshal(data: SRefreshWitchSkills): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.changedSkills).length);
	data.changedSkills.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt16(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshWitchSkills;