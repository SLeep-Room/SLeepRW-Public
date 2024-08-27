
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAcceptTask {
	taskid : number;
}

class CAcceptTask {
    static DefaultData: CAcceptTask = {
	taskid : 0,
    }

    static Unmarshal(buffer: Buffer): CAcceptTask { 
	const reader = new BufferReader(buffer)
try{
	CAcceptTask.DefaultData.taskid = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAcceptTask.DefaultData);
    }

    static Marshal(data: CAcceptTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.taskid)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAcceptTask;