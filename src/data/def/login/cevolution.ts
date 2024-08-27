
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CEvolution {
	roleId : number;
	itemId : number;
	itemNum : number;
}

class CEvolution {
    static DefaultData: CEvolution = {
	roleId : 0,
	itemId : 0,
	itemNum : 0,
    }

    static Unmarshal(buffer: Buffer): CEvolution { 
	const reader = new BufferReader(buffer)
try{
	CEvolution.DefaultData.roleId = reader.readInt32()
	CEvolution.DefaultData.itemId = reader.readInt32()
	CEvolution.DefaultData.itemNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CEvolution.DefaultData);
    }

    static Marshal(data: CEvolution): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.itemNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CEvolution;