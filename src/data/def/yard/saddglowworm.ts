
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAddGlowworm {
	taskId : number;
	glowwormTotalNums : number;
}

class SAddGlowworm {
    static DefaultData: SAddGlowworm = {
	taskId : 0,
	glowwormTotalNums : 0,
    }

    static Unmarshal(buffer: Buffer): SAddGlowworm { 
	const reader = new BufferReader(buffer)
try{
	SAddGlowworm.DefaultData.taskId = reader.readInt32()
	SAddGlowworm.DefaultData.glowwormTotalNums = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddGlowworm.DefaultData);
    }

    static Marshal(data: SAddGlowworm): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.taskId)
	buffer.writeInt32(data.glowwormTotalNums)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAddGlowworm;