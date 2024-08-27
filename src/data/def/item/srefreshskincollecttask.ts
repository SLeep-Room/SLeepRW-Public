
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshSkinCollectTask {
	tasks : [number,number][];
}

class SRefreshSkinCollectTask {
    static DefaultData: SRefreshSkinCollectTask = {
	tasks : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshSkinCollectTask { 
	const reader = new BufferReader(buffer)
try{
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    SRefreshSkinCollectTask.DefaultData.tasks.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshSkinCollectTask.DefaultData);
    }

    static Marshal(data: SRefreshSkinCollectTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.tasks).length);
	data.tasks.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshSkinCollectTask;