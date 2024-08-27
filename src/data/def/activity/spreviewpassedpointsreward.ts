
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import rewards from '../../bean/activity/passedpointsreward';

interface SPreviewPassedPointsReward {
	afterBattle : number;
	rewards : [number,typeof rewards.DefaultData][];
}

class SPreviewPassedPointsReward {
    static DefaultData: SPreviewPassedPointsReward = {
	afterBattle : 0,
	rewards : [],
    }

    static Unmarshal(buffer: Buffer): SPreviewPassedPointsReward { 
	const reader = new BufferReader(buffer)
try{
	SPreviewPassedPointsReward.DefaultData.afterBattle = reader.readInt32()
	const rewardsLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardsLength; i++) {
	    SPreviewPassedPointsReward.DefaultData.rewards.push([reader.readInt32(),rewards.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SPreviewPassedPointsReward.DefaultData);
    }

    static Marshal(data: SPreviewPassedPointsReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.afterBattle)
	buffer.writeCompactInt32(Object.keys(data.rewards).length);
	data.rewards.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(rewards.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SPreviewPassedPointsReward;