
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import activities from '../../bean/activity/activityadsbean';

interface SActiveBanners {
	activities : [number,typeof activities.DefaultData][];
}

class SActiveBanners {
    static DefaultData: SActiveBanners = {
	activities : [],
    }

    static Unmarshal(buffer: Buffer): SActiveBanners { 
	const reader = new BufferReader(buffer)
try{
	const activitiesLength = reader.readCompactUInt32();

	for (let i = 0; i < activitiesLength; i++) {
	    SActiveBanners.DefaultData.activities.push([reader.readInt32(),activities.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SActiveBanners.DefaultData);
    }

    static Marshal(data: SActiveBanners): Buffer { 
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


export default SActiveBanners;