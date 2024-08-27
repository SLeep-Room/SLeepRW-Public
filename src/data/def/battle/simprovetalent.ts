
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SImproveTalent {
	unlockNode : number;
}

class SImproveTalent {
    static DefaultData: SImproveTalent = {
	unlockNode : 0,
    }

    static Unmarshal(buffer: Buffer): SImproveTalent { 
	const reader = new BufferReader(buffer)
try{
	SImproveTalent.DefaultData.unlockNode = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SImproveTalent.DefaultData);
    }

    static Marshal(data: SImproveTalent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.unlockNode)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SImproveTalent;