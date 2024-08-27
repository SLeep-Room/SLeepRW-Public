
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import tasks from '../../bean/yard/tasktolevel';

interface SStrengthTask {
	tasks : typeof tasks.DefaultData[];
}

class SStrengthTask {
    static DefaultData: SStrengthTask = {
	tasks : [],
    }

    static Unmarshal(buffer: Buffer): SStrengthTask { 
	const reader = new BufferReader(buffer)
try{
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    SStrengthTask.DefaultData.tasks.push(tasks.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SStrengthTask.DefaultData);
    }

    static Marshal(data: SStrengthTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.tasks).length);
	data.tasks.forEach((value) => {
		buffer.writeBuffer(tasks.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SStrengthTask;