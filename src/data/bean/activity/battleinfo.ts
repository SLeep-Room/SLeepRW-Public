
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface BattleInfo {
	battleId : number;
	score : number;
	battleTimes : number;
}

class BattleInfo {
    static DefaultData: BattleInfo = {
	battleId : 0,
	score : 0,
	battleTimes : 0,
    }

    static Unmarshal(buffer: BufferReader): BattleInfo { 
	const reader = buffer
try{
	BattleInfo.DefaultData.battleId = reader.readInt32()
	BattleInfo.DefaultData.score = reader.readInt32()
	BattleInfo.DefaultData.battleTimes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BattleInfo.DefaultData);
    }

    static Marshal(data: BattleInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleId)
	buffer.writeInt32(data.score)
	buffer.writeInt32(data.battleTimes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default BattleInfo;