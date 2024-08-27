
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface TaskStatus {
}

class TaskStatus {
    static DefaultData: TaskStatus = {
    }

    static Unmarshal(buffer: BufferReader): TaskStatus { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},TaskStatus.DefaultData);
    }

    static Marshal(data: TaskStatus): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default TaskStatus;