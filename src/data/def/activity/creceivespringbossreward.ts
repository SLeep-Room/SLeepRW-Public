
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveSpringBossReward {
	bossId : number;
}

class CReceiveSpringBossReward {
    static DefaultData: CReceiveSpringBossReward = {
	bossId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveSpringBossReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveSpringBossReward.DefaultData.bossId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveSpringBossReward.DefaultData);
    }

    static Marshal(data: CReceiveSpringBossReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bossId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveSpringBossReward;