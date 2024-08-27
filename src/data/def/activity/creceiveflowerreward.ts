
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveFlowerReward {
	rewardType : number;
	id : number;
}

class CReceiveFlowerReward {
    static DefaultData: CReceiveFlowerReward = {
	rewardType : 0,
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveFlowerReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveFlowerReward.DefaultData.rewardType = reader.readInt32()
	CReceiveFlowerReward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveFlowerReward.DefaultData);
    }

    static Marshal(data: CReceiveFlowerReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardType)
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveFlowerReward;