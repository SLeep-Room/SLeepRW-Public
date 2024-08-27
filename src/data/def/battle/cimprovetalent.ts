
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CImproveTalent {
	unlockNode : number;
}

class CImproveTalent {
    static DefaultData: CImproveTalent = {
	unlockNode : 0,
    }

    static Unmarshal(buffer: Buffer): CImproveTalent { 
	const reader = new BufferReader(buffer)
try{
	CImproveTalent.DefaultData.unlockNode = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CImproveTalent.DefaultData);
    }

    static Marshal(data: CImproveTalent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.unlockNode)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CImproveTalent;