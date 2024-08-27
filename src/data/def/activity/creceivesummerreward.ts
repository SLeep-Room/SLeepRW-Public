
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveSummerReward {
	rewardId : number;
}

class CReceiveSummerReward {
    static DefaultData: CReceiveSummerReward = {
	rewardId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveSummerReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveSummerReward.DefaultData.rewardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveSummerReward.DefaultData);
    }

    static Marshal(data: CReceiveSummerReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveSummerReward;