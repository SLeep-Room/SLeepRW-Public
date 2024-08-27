
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveLevelUpReward {
	id : number;
}

class CReceiveLevelUpReward {
    static DefaultData: CReceiveLevelUpReward = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveLevelUpReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveLevelUpReward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveLevelUpReward.DefaultData);
    }

    static Marshal(data: CReceiveLevelUpReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveLevelUpReward;