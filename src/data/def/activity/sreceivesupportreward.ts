
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveSupportReward {
	rewardType : number;
	id : number;
}

class SReceiveSupportReward {
    static DefaultData: SReceiveSupportReward = {
	rewardType : 0,
	id : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveSupportReward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveSupportReward.DefaultData.rewardType = reader.readInt32()
	SReceiveSupportReward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveSupportReward.DefaultData);
    }

    static Marshal(data: SReceiveSupportReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardType)
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveSupportReward;