
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSpringBattleResult {
	bossId : number;
	stage : number;
	score : number;
}

class SSpringBattleResult {
    static DefaultData: SSpringBattleResult = {
	bossId : 0,
	stage : 0,
	score : 0,
    }

    static Unmarshal(buffer: Buffer): SSpringBattleResult { 
	const reader = new BufferReader(buffer)
try{
	SSpringBattleResult.DefaultData.bossId = reader.readInt32()
	SSpringBattleResult.DefaultData.stage = reader.readInt32()
	SSpringBattleResult.DefaultData.score = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSpringBattleResult.DefaultData);
    }

    static Marshal(data: SSpringBattleResult): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bossId)
	buffer.writeInt32(data.stage)
	buffer.writeInt32(data.score)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSpringBattleResult;