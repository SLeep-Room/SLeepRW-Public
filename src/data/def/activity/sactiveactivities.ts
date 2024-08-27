
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import activities from '../../bean/activity/activityadsbean';

interface SActiveActivities {
	activities : [number,typeof activities.DefaultData][];
}

class SActiveActivities {
    static DefaultData: SActiveActivities = {
	activities : [],
    }

    static Unmarshal(buffer: Buffer): SActiveActivities { 
	const reader = new BufferReader(buffer)
try{
	const activitiesLength = reader.readCompactUInt32();

	for (let i = 0; i < activitiesLength; i++) {
	    SActiveActivities.DefaultData.activities.push([reader.readInt32(),activities.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SActiveActivities.DefaultData);
    }

    static Marshal(data: SActiveActivities): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.activities).length);
	data.activities.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(activities.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SActiveActivities;