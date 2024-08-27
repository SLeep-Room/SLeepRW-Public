
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CResetActivityTask {
	activityID : number;
	taskID : number;
}

class CResetActivityTask {
    static DefaultData: CResetActivityTask = {
	activityID : 0,
	taskID : 0,
    }

    static Unmarshal(buffer: Buffer): CResetActivityTask { 
	const reader = new BufferReader(buffer)
try{
	CResetActivityTask.DefaultData.activityID = reader.readInt32()
	CResetActivityTask.DefaultData.taskID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CResetActivityTask.DefaultData);
    }

    static Marshal(data: CResetActivityTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeInt32(data.taskID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CResetActivityTask;