
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Task {
	statue : number;
	buildId : number;
	buildLvId : number;
	progress : number;
	leftTime : bigint;
}

class Task {
    static DefaultData: Task = {
	statue : 0,
	buildId : 0,
	buildLvId : 0,
	progress : 0,
	leftTime : 0n,
    }

    static Unmarshal(buffer: BufferReader): Task { 
	const reader = buffer
try{
	Task.DefaultData.statue = reader.readInt32()
	Task.DefaultData.buildId = reader.readInt32()
	Task.DefaultData.buildLvId = reader.readInt32()
	Task.DefaultData.progress = reader.readInt32()
	Task.DefaultData.leftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Task.DefaultData);
    }

    static Marshal(data: Task): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.statue)
	buffer.writeInt32(data.buildId)
	buffer.writeInt32(data.buildLvId)
	buffer.writeInt32(data.progress)
	buffer.writeInt64(BigInt(data.leftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Task;