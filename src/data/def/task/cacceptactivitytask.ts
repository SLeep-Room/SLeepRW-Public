
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAcceptActivityTask {
	activityID : number;
	taskID : number;
}

class CAcceptActivityTask {
    static DefaultData: CAcceptActivityTask = {
	activityID : 0,
	taskID : 0,
    }

    static Unmarshal(buffer: Buffer): CAcceptActivityTask { 
	const reader = new BufferReader(buffer)
try{
	CAcceptActivityTask.DefaultData.activityID = reader.readInt32()
	CAcceptActivityTask.DefaultData.taskID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAcceptActivityTask.DefaultData);
    }

    static Marshal(data: CAcceptActivityTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeInt32(data.taskID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAcceptActivityTask;