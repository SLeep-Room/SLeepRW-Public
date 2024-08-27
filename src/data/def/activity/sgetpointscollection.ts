
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import tasks from '../../bean/activity/collectiontask';

interface SGetPointsCollection {
	activityID : number;
	tasks : typeof tasks.DefaultData[];
	points : [number,bigint][];
}

class SGetPointsCollection {
    static DefaultData: SGetPointsCollection = {
	activityID : 0,
	tasks : [],
	points : [],
    }

    static Unmarshal(buffer: Buffer): SGetPointsCollection { 
	const reader = new BufferReader(buffer)
try{
	SGetPointsCollection.DefaultData.activityID = reader.readInt32()
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    SGetPointsCollection.DefaultData.tasks.push(tasks.Unmarshal(reader));
	}
	const pointsLength = reader.readCompactUInt32();

	for (let i = 0; i < pointsLength; i++) {
	    SGetPointsCollection.DefaultData.points.push([reader.readInt32(),reader.readInt64()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetPointsCollection.DefaultData);
    }

    static Marshal(data: SGetPointsCollection): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeCompactInt32(Object.keys(data.tasks).length);
	data.tasks.forEach((value) => {
		buffer.writeBuffer(tasks.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.points).length);
	data.points.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetPointsCollection;