
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeServantSkill {
	lineupId : number;
	skillId : number;
}

class CChangeServantSkill {
    static DefaultData: CChangeServantSkill = {
	lineupId : 0,
	skillId : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeServantSkill { 
	const reader = new BufferReader(buffer)
try{
	CChangeServantSkill.DefaultData.lineupId = reader.readInt32()
	CChangeServantSkill.DefaultData.skillId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeServantSkill.DefaultData);
    }

    static Marshal(data: CChangeServantSkill): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lineupId)
	buffer.writeInt32(data.skillId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeServantSkill;