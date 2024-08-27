
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SopenBirthReward {
	rewardId : number;
}

class SopenBirthReward {
    static DefaultData: SopenBirthReward = {
	rewardId : 0,
    }

    static Unmarshal(buffer: Buffer): SopenBirthReward { 
	const reader = new BufferReader(buffer)
try{
	SopenBirthReward.DefaultData.rewardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SopenBirthReward.DefaultData);
    }

    static Marshal(data: SopenBirthReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SopenBirthReward;