
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface TaskToLevel {
	taskId : number;
	taskLevel : number;
}

class TaskToLevel {
    static DefaultData: TaskToLevel = {
	taskId : 0,
	taskLevel : 0,
    }

    static Unmarshal(buffer: BufferReader): TaskToLevel { 
	const reader = buffer
try{
	TaskToLevel.DefaultData.taskId = reader.readInt32()
	TaskToLevel.DefaultData.taskLevel = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},TaskToLevel.DefaultData);
    }

    static Marshal(data: TaskToLevel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.taskId)
	buffer.writeInt32(data.taskLevel)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default TaskToLevel;