
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveSupportReward {
	rewardType : number;
	id : number;
}

class CReceiveSupportReward {
    static DefaultData: CReceiveSupportReward = {
	rewardType : 0,
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveSupportReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveSupportReward.DefaultData.rewardType = reader.readInt32()
	CReceiveSupportReward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveSupportReward.DefaultData);
    }

    static Marshal(data: CReceiveSupportReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardType)
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveSupportReward;