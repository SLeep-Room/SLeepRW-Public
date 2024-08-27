
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveReward {
	rewardId : number;
}

class CReceiveReward {
    static DefaultData: CReceiveReward = {
	rewardId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveReward.DefaultData.rewardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveReward.DefaultData);
    }

    static Marshal(data: CReceiveReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveReward;