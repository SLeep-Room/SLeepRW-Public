
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetProgressReward {
	activityId : number;
	progressReward : [number,number][];
}

class SGetProgressReward {
    static DefaultData: SGetProgressReward = {
	activityId : 0,
	progressReward : [],
    }

    static Unmarshal(buffer: Buffer): SGetProgressReward { 
	const reader = new BufferReader(buffer)
try{
	SGetProgressReward.DefaultData.activityId = reader.readInt32()
	const progressRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < progressRewardLength; i++) {
	    SGetProgressReward.DefaultData.progressReward.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetProgressReward.DefaultData);
    }

    static Marshal(data: SGetProgressReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeCompactInt32(Object.keys(data.progressReward).length);
	data.progressReward.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetProgressReward;