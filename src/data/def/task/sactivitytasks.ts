
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import activityTasks from '../../bean/task/taskinfo';

interface SActivityTasks {
	activityID : number;
	activityTasks : typeof activityTasks.DefaultData[];
	refresh : number;
}

class SActivityTasks {
    static DefaultData: SActivityTasks = {
	activityID : 0,
	activityTasks : [],
	refresh : 0,
    }

    static Unmarshal(buffer: Buffer): SActivityTasks { 
	const reader = new BufferReader(buffer)
try{
	SActivityTasks.DefaultData.activityID = reader.readInt32()
	const activityTasksLength = reader.readCompactUInt32();

	for (let i = 0; i < activityTasksLength; i++) {
	    SActivityTasks.DefaultData.activityTasks.push(activityTasks.Unmarshal(reader));
	}
	SActivityTasks.DefaultData.refresh = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SActivityTasks.DefaultData);
    }

    static Marshal(data: SActivityTasks): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeCompactInt32(Object.keys(data.activityTasks).length);
	data.activityTasks.forEach((value) => {
		buffer.writeBuffer(activityTasks.Marshal(value))
	});
	buffer.writeInt32(data.refresh)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SActivityTasks;