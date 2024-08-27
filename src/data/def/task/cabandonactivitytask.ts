
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAbandonActivityTask {
	activityID : number;
	taskID : number;
}

class CAbandonActivityTask {
    static DefaultData: CAbandonActivityTask = {
	activityID : 0,
	taskID : 0,
    }

    static Unmarshal(buffer: Buffer): CAbandonActivityTask { 
	const reader = new BufferReader(buffer)
try{
	CAbandonActivityTask.DefaultData.activityID = reader.readInt32()
	CAbandonActivityTask.DefaultData.taskID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAbandonActivityTask.DefaultData);
    }

    static Marshal(data: CAbandonActivityTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeInt32(data.taskID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAbandonActivityTask;