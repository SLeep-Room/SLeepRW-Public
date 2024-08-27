
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetHalloweenReward {
	rewardId : number;
}

class CGetHalloweenReward {
    static DefaultData: CGetHalloweenReward = {
	rewardId : 0,
    }

    static Unmarshal(buffer: Buffer): CGetHalloweenReward { 
	const reader = new BufferReader(buffer)
try{
	CGetHalloweenReward.DefaultData.rewardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetHalloweenReward.DefaultData);
    }

    static Marshal(data: CGetHalloweenReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetHalloweenReward;