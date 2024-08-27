
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import taskinfo from '../../bean/task/taskinfo';

interface SRefreshActivityTask {
	activityID : number;
	taskinfo : typeof taskinfo.DefaultData;
}

class SRefreshActivityTask {
    static DefaultData: SRefreshActivityTask = {
	activityID : 0,
	taskinfo : taskinfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshActivityTask { 
	const reader = new BufferReader(buffer)
try{
	SRefreshActivityTask.DefaultData.activityID = reader.readInt32()
	SRefreshActivityTask.DefaultData.taskinfo = taskinfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshActivityTask.DefaultData);
    }

    static Marshal(data: SRefreshActivityTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeBuffer(taskinfo.Marshal(data.taskinfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshActivityTask;