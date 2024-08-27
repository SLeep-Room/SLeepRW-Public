
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import tasks from '../../bean/task/taskinfo';

interface SCoinTasks {
	tasks : [number,typeof tasks.DefaultData][];
}

class SCoinTasks {
    static DefaultData: SCoinTasks = {
	tasks : [],
    }

    static Unmarshal(buffer: Buffer): SCoinTasks { 
	const reader = new BufferReader(buffer)
try{
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    SCoinTasks.DefaultData.tasks.push([reader.readInt32(),tasks.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCoinTasks.DefaultData);
    }

    static Marshal(data: SCoinTasks): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.tasks).length);
	data.tasks.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(tasks.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCoinTasks;