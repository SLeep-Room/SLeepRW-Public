
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import task from '../../bean/yard/task';

interface SRefreshTask {
	task : typeof task.DefaultData;
}

class SRefreshTask {
    static DefaultData: SRefreshTask = {
	task : task.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshTask { 
	const reader = new BufferReader(buffer)
try{
	SRefreshTask.DefaultData.task = task.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshTask.DefaultData);
    }

    static Marshal(data: SRefreshTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(task.Marshal(data.task))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshTask;