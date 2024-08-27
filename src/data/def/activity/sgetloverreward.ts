
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetLoverReward {
	progressReward : [number,number][];
}

class SGetLoverReward {
    static DefaultData: SGetLoverReward = {
	progressReward : [],
    }

    static Unmarshal(buffer: Buffer): SGetLoverReward { 
	const reader = new BufferReader(buffer)
try{
	const progressRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < progressRewardLength; i++) {
	    SGetLoverReward.DefaultData.progressReward.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetLoverReward.DefaultData);
    }

    static Marshal(data: SGetLoverReward): Buffer { 
	const buffer=new BufferWriter();
try{
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


export default SGetLoverReward;