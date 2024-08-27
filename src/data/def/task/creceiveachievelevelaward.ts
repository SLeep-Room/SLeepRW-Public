
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveAchieveLevelAward {
	level : number;
}

class CReceiveAchieveLevelAward {
    static DefaultData: CReceiveAchieveLevelAward = {
	level : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveAchieveLevelAward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveAchieveLevelAward.DefaultData.level = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveAchieveLevelAward.DefaultData);
    }

    static Marshal(data: CReceiveAchieveLevelAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.level)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveAchieveLevelAward;