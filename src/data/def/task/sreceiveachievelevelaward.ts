
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveAchieveLevelAward {
	level : number;
}

class SReceiveAchieveLevelAward {
    static DefaultData: SReceiveAchieveLevelAward = {
	level : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveAchieveLevelAward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveAchieveLevelAward.DefaultData.level = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveAchieveLevelAward.DefaultData);
    }

    static Marshal(data: SReceiveAchieveLevelAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.level)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveAchieveLevelAward;