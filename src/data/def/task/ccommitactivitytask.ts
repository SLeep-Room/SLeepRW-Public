
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCommitActivityTask {
	activityID : number;
	taskID : number;
}

class CCommitActivityTask {
    static DefaultData: CCommitActivityTask = {
	activityID : 0,
	taskID : 0,
    }

    static Unmarshal(buffer: Buffer): CCommitActivityTask { 
	const reader = new BufferReader(buffer)
try{
	CCommitActivityTask.DefaultData.activityID = reader.readInt32()
	CCommitActivityTask.DefaultData.taskID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCommitActivityTask.DefaultData);
    }

    static Marshal(data: CCommitActivityTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeInt32(data.taskID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCommitActivityTask;