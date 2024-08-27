
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SuitSkill {
	skillIds : number[];
}

class SuitSkill {
    static DefaultData: SuitSkill = {
	skillIds : [],
    }

    static Unmarshal(buffer: BufferReader): SuitSkill { 
	const reader = buffer
try{
	const skillIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < skillIdsLength; i++) {
	    SuitSkill.DefaultData.skillIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SuitSkill.DefaultData);
    }

    static Marshal(data: SuitSkill): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.skillIds).length);
	data.skillIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SuitSkill;