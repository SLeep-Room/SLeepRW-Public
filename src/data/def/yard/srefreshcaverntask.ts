
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import task from '../../bean/yard/caverntask';

interface SRefreshCavernTask {
	task : typeof task.DefaultData;
}

class SRefreshCavernTask {
    static DefaultData: SRefreshCavernTask = {
	task : task.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshCavernTask { 
	const reader = new BufferReader(buffer)
try{
	SRefreshCavernTask.DefaultData.task = task.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshCavernTask.DefaultData);
    }

    static Marshal(data: SRefreshCavernTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(task.Marshal(data.task))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshCavernTask;