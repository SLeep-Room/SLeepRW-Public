
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveScoreReward {
	scoreType : number;
	rewardId : number;
}

class CReceiveScoreReward {
    static DefaultData: CReceiveScoreReward = {
	scoreType : 0,
	rewardId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveScoreReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveScoreReward.DefaultData.scoreType = reader.readInt32()
	CReceiveScoreReward.DefaultData.rewardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveScoreReward.DefaultData);
    }

    static Marshal(data: CReceiveScoreReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.scoreType)
	buffer.writeInt32(data.rewardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveScoreReward;