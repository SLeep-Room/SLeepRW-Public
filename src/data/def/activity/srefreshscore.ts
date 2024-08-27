
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import scoreRewards from '../../bean/activity/scorereward';

interface SRefreshScore {
	scoreRewards : [number,typeof scoreRewards.DefaultData][];
}

class SRefreshScore {
    static DefaultData: SRefreshScore = {
	scoreRewards : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshScore { 
	const reader = new BufferReader(buffer)
try{
	const scoreRewardsLength = reader.readCompactUInt32();

	for (let i = 0; i < scoreRewardsLength; i++) {
	    SRefreshScore.DefaultData.scoreRewards.push([reader.readInt32(),scoreRewards.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshScore.DefaultData);
    }

    static Marshal(data: SRefreshScore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.scoreRewards).length);
	data.scoreRewards.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(scoreRewards.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshScore;