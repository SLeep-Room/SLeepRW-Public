
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import tasks from '../../bean/activity/taskfinishprogress';

interface STaskFinishProgress {
	tasks : [number,typeof tasks.DefaultData][];
	firstDrama : number;
}

class STaskFinishProgress {
    static DefaultData: STaskFinishProgress = {
	tasks : [],
	firstDrama : 0,
    }

    static Unmarshal(buffer: Buffer): STaskFinishProgress { 
	const reader = new BufferReader(buffer)
try{
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    STaskFinishProgress.DefaultData.tasks.push([reader.readInt32(),tasks.Unmarshal(reader)]);
	}
	STaskFinishProgress.DefaultData.firstDrama = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},STaskFinishProgress.DefaultData);
    }

    static Marshal(data: STaskFinishProgress): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.tasks).length);
	data.tasks.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(tasks.Marshal(value))
	});
	buffer.writeInt32(data.firstDrama)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default STaskFinishProgress;