
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAddSoul {
	roleId : number;
	soul : number;
}

class CAddSoul {
    static DefaultData: CAddSoul = {
	roleId : 0,
	soul : 0,
    }

    static Unmarshal(buffer: Buffer): CAddSoul { 
	const reader = new BufferReader(buffer)
try{
	CAddSoul.DefaultData.roleId = reader.readInt32()
	CAddSoul.DefaultData.soul = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAddSoul.DefaultData);
    }

    static Marshal(data: CAddSoul): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.soul)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAddSoul;