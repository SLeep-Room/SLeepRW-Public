
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SEvolution {
	roleId : number;
	evolution : number;
}

class SEvolution {
    static DefaultData: SEvolution = {
	roleId : 0,
	evolution : 0,
    }

    static Unmarshal(buffer: Buffer): SEvolution { 
	const reader = new BufferReader(buffer)
try{
	SEvolution.DefaultData.roleId = reader.readInt32()
	SEvolution.DefaultData.evolution = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEvolution.DefaultData);
    }

    static Marshal(data: SEvolution): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.evolution)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEvolution;