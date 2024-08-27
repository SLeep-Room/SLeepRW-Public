
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface TaskFinishProgress {
	status : number;
	num : number;
}

class TaskFinishProgress {
    static DefaultData: TaskFinishProgress = {
	status : 0,
	num : 0,
    }

    static Unmarshal(buffer: BufferReader): TaskFinishProgress { 
	const reader = buffer
try{
	TaskFinishProgress.DefaultData.status = reader.readInt32()
	TaskFinishProgress.DefaultData.num = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},TaskFinishProgress.DefaultData);
    }

    static Marshal(data: TaskFinishProgress): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.status)
	buffer.writeInt32(data.num)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default TaskFinishProgress;