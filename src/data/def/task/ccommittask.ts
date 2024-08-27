
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCommitTask {
	taskid : number;
	agCoinTask : number;
}

class CCommitTask {
    static DefaultData: CCommitTask = {
	taskid : 0,
	agCoinTask : 0,
    }

    static Unmarshal(buffer: Buffer): CCommitTask { 
	const reader = new BufferReader(buffer)
try{
	CCommitTask.DefaultData.taskid = reader.readInt32()
	CCommitTask.DefaultData.agCoinTask = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCommitTask.DefaultData);
    }

    static Marshal(data: CCommitTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.taskid)
	buffer.writeInt32(data.agCoinTask)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCommitTask;