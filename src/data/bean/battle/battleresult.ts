
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface BattleResult {
	battleId : number;
	result : number;
	failTime : number;
	resourceFirstWin : number;
}

class BattleResult {
    static DefaultData: BattleResult = {
	battleId : 0,
	result : 0,
	failTime : 0,
	resourceFirstWin : 0,
    }

    static Unmarshal(buffer: BufferReader): BattleResult { 
	const reader = buffer
try{
	BattleResult.DefaultData.battleId = reader.readInt32()
	BattleResult.DefaultData.result = reader.readInt32()
	BattleResult.DefaultData.failTime = reader.readInt32()
	BattleResult.DefaultData.resourceFirstWin = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BattleResult.DefaultData);
    }

    static Marshal(data: BattleResult): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleId)
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.failTime)
	buffer.writeInt32(data.resourceFirstWin)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default BattleResult;