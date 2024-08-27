
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import taskinfo from '../../bean/task/taskinfo';

interface SAcceptTask {
	taskinfo : typeof taskinfo.DefaultData;
}

class SAcceptTask {
    static DefaultData: SAcceptTask = {
	taskinfo : taskinfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SAcceptTask { 
	const reader = new BufferReader(buffer)
try{
	SAcceptTask.DefaultData.taskinfo = taskinfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAcceptTask.DefaultData);
    }

    static Marshal(data: SAcceptTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(taskinfo.Marshal(data.taskinfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAcceptTask;