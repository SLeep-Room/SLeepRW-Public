
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CopenBirthReward {
	rewardId : number;
}

class CopenBirthReward {
    static DefaultData: CopenBirthReward = {
	rewardId : 0,
    }

    static Unmarshal(buffer: Buffer): CopenBirthReward { 
	const reader = new BufferReader(buffer)
try{
	CopenBirthReward.DefaultData.rewardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CopenBirthReward.DefaultData);
    }

    static Marshal(data: CopenBirthReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CopenBirthReward;