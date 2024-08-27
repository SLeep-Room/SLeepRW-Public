
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveFlowerReward {
	rewardType : number;
	id : number;
}

class SReceiveFlowerReward {
    static DefaultData: SReceiveFlowerReward = {
	rewardType : 0,
	id : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveFlowerReward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveFlowerReward.DefaultData.rewardType = reader.readInt32()
	SReceiveFlowerReward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveFlowerReward.DefaultData);
    }

    static Marshal(data: SReceiveFlowerReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardType)
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveFlowerReward;