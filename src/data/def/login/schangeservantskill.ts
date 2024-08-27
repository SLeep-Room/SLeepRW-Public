
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeServantSkill {
	lineupId : number;
	result : number;
}

class SChangeServantSkill {
    static DefaultData: SChangeServantSkill = {
	lineupId : 0,
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeServantSkill { 
	const reader = new BufferReader(buffer)
try{
	SChangeServantSkill.DefaultData.lineupId = reader.readInt32()
	SChangeServantSkill.DefaultData.result = reader.readInt16()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeServantSkill.DefaultData);
    }

    static Marshal(data: SChangeServantSkill): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lineupId)
	buffer.writeInt16(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeServantSkill;