
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface LampTask {
	id : number;
	level : number;
	glowwormNums : number;
}

class LampTask {
    static DefaultData: LampTask = {
	id : 0,
	level : 0,
	glowwormNums : 0,
    }

    static Unmarshal(buffer: BufferReader): LampTask { 
	const reader = buffer
try{
	LampTask.DefaultData.id = reader.readInt32()
	LampTask.DefaultData.level = reader.readInt32()
	LampTask.DefaultData.glowwormNums = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},LampTask.DefaultData);
    }

    static Marshal(data: LampTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.glowwormNums)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default LampTask;