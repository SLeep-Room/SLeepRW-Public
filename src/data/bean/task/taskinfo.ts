
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import conditions from '../../bean/task/condition';

interface TaskInfo {
	taskid : number;
	taskstatus : number;
	conditions : typeof conditions.DefaultData[];
	acceptTime : bigint;
	visitable : number;
}

class TaskInfo {
    static DefaultData: TaskInfo = {
	taskid : 0,
	taskstatus : 0,
	conditions : [],
	acceptTime : 0n,
	visitable : 0,
    }

    static Unmarshal(buffer: BufferReader): TaskInfo { 
	const reader = buffer
try{
	TaskInfo.DefaultData.taskid = reader.readInt32()
	TaskInfo.DefaultData.taskstatus = reader.readInt32()
	const conditionsLength = reader.readCompactUInt32();

	for (let i = 0; i < conditionsLength; i++) {
	    TaskInfo.DefaultData.conditions.push(conditions.Unmarshal(reader));
	}
	TaskInfo.DefaultData.acceptTime = reader.readInt64()
	TaskInfo.DefaultData.visitable = reader.readInt16()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},TaskInfo.DefaultData);
    }

    static Marshal(data: TaskInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.taskid)
	buffer.writeInt32(data.taskstatus)
	buffer.writeCompactInt32(Object.keys(data.conditions).length);
	data.conditions.forEach((value) => {
		buffer.writeBuffer(conditions.Marshal(value))
	});
	buffer.writeInt64(BigInt(data.acceptTime))
	buffer.writeInt16(data.visitable)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default TaskInfo;