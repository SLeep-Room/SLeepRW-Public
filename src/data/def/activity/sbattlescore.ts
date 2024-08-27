
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBattleScore {
	score : number;
	totalScore : number;
}

class SBattleScore {
    static DefaultData: SBattleScore = {
	score : 0,
	totalScore : 0,
    }

    static Unmarshal(buffer: Buffer): SBattleScore { 
	const reader = new BufferReader(buffer)
try{
	SBattleScore.DefaultData.score = reader.readInt32()
	SBattleScore.DefaultData.totalScore = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBattleScore.DefaultData);
    }

    static Marshal(data: SBattleScore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.score)
	buffer.writeInt32(data.totalScore)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBattleScore;