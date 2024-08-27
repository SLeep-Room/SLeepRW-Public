
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import taskinfo from '../../bean/task/taskinfo';

interface SRefreshTask {
	taskinfo : typeof taskinfo.DefaultData;
}

class SRefreshTask {
    static DefaultData: SRefreshTask = {
	taskinfo : taskinfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshTask { 
	const reader = new BufferReader(buffer)
try{
	SRefreshTask.DefaultData.taskinfo = taskinfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshTask.DefaultData);
    }

    static Marshal(data: SRefreshTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(taskinfo.Marshal(data.taskinfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshTask;