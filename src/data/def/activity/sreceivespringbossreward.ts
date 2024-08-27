
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveSpringBossReward {
	bossId : number;
}

class SReceiveSpringBossReward {
    static DefaultData: SReceiveSpringBossReward = {
	bossId : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveSpringBossReward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveSpringBossReward.DefaultData.bossId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveSpringBossReward.DefaultData);
    }

    static Marshal(data: SReceiveSpringBossReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bossId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveSpringBossReward;