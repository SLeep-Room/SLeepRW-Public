
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CActivityTasks {
	activityID : number;
}

class CActivityTasks {
    static DefaultData: CActivityTasks = {
	activityID : 0,
    }

    static Unmarshal(buffer: Buffer): CActivityTasks { 
	const reader = new BufferReader(buffer)
try{
	CActivityTasks.DefaultData.activityID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CActivityTasks.DefaultData);
    }

    static Marshal(data: CActivityTasks): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CActivityTasks;