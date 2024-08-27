
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAddGlowworm {
	taskId : number;
	addNums : number;
}

class CAddGlowworm {
    static DefaultData: CAddGlowworm = {
	taskId : 0,
	addNums : 0,
    }

    static Unmarshal(buffer: Buffer): CAddGlowworm { 
	const reader = new BufferReader(buffer)
try{
	CAddGlowworm.DefaultData.taskId = reader.readInt32()
	CAddGlowworm.DefaultData.addNums = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAddGlowworm.DefaultData);
    }

    static Marshal(data: CAddGlowworm): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.taskId)
	buffer.writeInt32(data.addNums)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAddGlowworm;