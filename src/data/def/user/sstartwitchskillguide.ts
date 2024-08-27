
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SStartWitchSkillGuide {
	skillItemIds : number[];
	guide : number;
}

class SStartWitchSkillGuide {
    static DefaultData: SStartWitchSkillGuide = {
	skillItemIds : [],
	guide : 0,
    }

    static Unmarshal(buffer: Buffer): SStartWitchSkillGuide { 
	const reader = new BufferReader(buffer)
try{
	const skillItemIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < skillItemIdsLength; i++) {
	    SStartWitchSkillGuide.DefaultData.skillItemIds.push(reader.readInt32());
	}
	SStartWitchSkillGuide.DefaultData.guide = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SStartWitchSkillGuide.DefaultData);
    }

    static Marshal(data: SStartWitchSkillGuide): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.skillItemIds).length);
	data.skillItemIds.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.guide)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SStartWitchSkillGuide;