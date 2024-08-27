
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import tasks from '../../bean/task/taskinfo';

interface SBPCoinTasks {
	tasks : [number,typeof tasks.DefaultData][];
}

class SBPCoinTasks {
    static DefaultData: SBPCoinTasks = {
	tasks : [],
    }

    static Unmarshal(buffer: Buffer): SBPCoinTasks { 
	const reader = new BufferReader(buffer)
try{
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    SBPCoinTasks.DefaultData.tasks.push([reader.readInt32(),tasks.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBPCoinTasks.DefaultData);
    }

    static Marshal(data: SBPCoinTasks): Buffer { 
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


export default SBPCoinTasks;