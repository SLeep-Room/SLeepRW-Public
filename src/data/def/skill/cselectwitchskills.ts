
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSelectWitchSkills {
	skillItemIds : number[];
}

class CSelectWitchSkills {
    static DefaultData: CSelectWitchSkills = {
	skillItemIds : [],
    }

    static Unmarshal(buffer: Buffer): CSelectWitchSkills { 
	const reader = new BufferReader(buffer)
try{
	const skillItemIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < skillItemIdsLength; i++) {
	    CSelectWitchSkills.DefaultData.skillItemIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSelectWitchSkills.DefaultData);
    }

    static Marshal(data: CSelectWitchSkills): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.skillItemIds).length);
	data.skillItemIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSelectWitchSkills;