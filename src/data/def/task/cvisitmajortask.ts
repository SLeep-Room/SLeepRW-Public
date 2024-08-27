
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CVisitMajorTask {
	taskIds : number[];
}

class CVisitMajorTask {
    static DefaultData: CVisitMajorTask = {
	taskIds : [],
    }

    static Unmarshal(buffer: Buffer): CVisitMajorTask { 
	const reader = new BufferReader(buffer)
try{
	const taskIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < taskIdsLength; i++) {
	    CVisitMajorTask.DefaultData.taskIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CVisitMajorTask.DefaultData);
    }

    static Marshal(data: CVisitMajorTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.taskIds).length);
	data.taskIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CVisitMajorTask;