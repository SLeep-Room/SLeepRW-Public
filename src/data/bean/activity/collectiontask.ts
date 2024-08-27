
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CollectionTask {
	id : number;
	needPointsID : number;
	needPoints : number;
	status : number;
	rewards : [number,number][];
}

class CollectionTask {
    static DefaultData: CollectionTask = {
	id : 0,
	needPointsID : 0,
	needPoints : 0,
	status : 0,
	rewards : [],
    }

    static Unmarshal(buffer: BufferReader): CollectionTask { 
	const reader = buffer
try{
	CollectionTask.DefaultData.id = reader.readInt32()
	CollectionTask.DefaultData.needPointsID = reader.readInt32()
	CollectionTask.DefaultData.needPoints = reader.readInt32()
	CollectionTask.DefaultData.status = reader.readInt32()
	const rewardsLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardsLength; i++) {
	    CollectionTask.DefaultData.rewards.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CollectionTask.DefaultData);
    }

    static Marshal(data: CollectionTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.needPointsID)
	buffer.writeInt32(data.needPoints)
	buffer.writeInt32(data.status)
	buffer.writeCompactInt32(Object.keys(data.rewards).length);
	data.rewards.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CollectionTask;