
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUnlockTalent {
	roleId : number;
	pos : number;
}

class CUnlockTalent {
    static DefaultData: CUnlockTalent = {
	roleId : 0,
	pos : 0,
    }

    static Unmarshal(buffer: Buffer): CUnlockTalent { 
	const reader = new BufferReader(buffer)
try{
	CUnlockTalent.DefaultData.roleId = reader.readInt32()
	CUnlockTalent.DefaultData.pos = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUnlockTalent.DefaultData);
    }

    static Marshal(data: CUnlockTalent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.pos)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUnlockTalent;