
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CImproveSkill {
	roleId : number;
	unlockNode : number;
}

class CImproveSkill {
    static DefaultData: CImproveSkill = {
	roleId : 0,
	unlockNode : 0,
    }

    static Unmarshal(buffer: Buffer): CImproveSkill { 
	const reader = new BufferReader(buffer)
try{
	CImproveSkill.DefaultData.roleId = reader.readInt32()
	CImproveSkill.DefaultData.unlockNode = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CImproveSkill.DefaultData);
    }

    static Marshal(data: CImproveSkill): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.unlockNode)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CImproveSkill;