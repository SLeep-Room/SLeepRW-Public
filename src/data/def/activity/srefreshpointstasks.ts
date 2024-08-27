
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import tasks from '../../bean/activity/collectiontask';

interface SRefreshPointsTasks {
	activityID : number;
	tasks : typeof tasks.DefaultData[];
}

class SRefreshPointsTasks {
    static DefaultData: SRefreshPointsTasks = {
	activityID : 0,
	tasks : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshPointsTasks { 
	const reader = new BufferReader(buffer)
try{
	SRefreshPointsTasks.DefaultData.activityID = reader.readInt32()
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    SRefreshPointsTasks.DefaultData.tasks.push(tasks.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshPointsTasks.DefaultData);
    }

    static Marshal(data: SRefreshPointsTasks): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeCompactInt32(Object.keys(data.tasks).length);
	data.tasks.forEach((value) => {
		buffer.writeBuffer(tasks.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshPointsTasks;