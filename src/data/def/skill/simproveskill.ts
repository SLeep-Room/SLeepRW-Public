
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SImproveSkill {
	roleId : number;
	unlockNode : number;
}

class SImproveSkill {
    static DefaultData: SImproveSkill = {
	roleId : 0,
	unlockNode : 0,
    }

    static Unmarshal(buffer: Buffer): SImproveSkill { 
	const reader = new BufferReader(buffer)
try{
	SImproveSkill.DefaultData.roleId = reader.readInt32()
	SImproveSkill.DefaultData.unlockNode = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SImproveSkill.DefaultData);
    }

    static Marshal(data: SImproveSkill): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.unlockNode)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SImproveSkill;