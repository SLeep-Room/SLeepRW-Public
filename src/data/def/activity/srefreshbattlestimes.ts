
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshBattlesTimes {
	bossId : number;
	resetConfigId : number;
	leftTimes : number;
}

class SRefreshBattlesTimes {
    static DefaultData: SRefreshBattlesTimes = {
	bossId : 0,
	resetConfigId : 0,
	leftTimes : 0,
    }

    static Unmarshal(buffer: Buffer): SRefreshBattlesTimes { 
	const reader = new BufferReader(buffer)
try{
	SRefreshBattlesTimes.DefaultData.bossId = reader.readInt32()
	SRefreshBattlesTimes.DefaultData.resetConfigId = reader.readInt32()
	SRefreshBattlesTimes.DefaultData.leftTimes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshBattlesTimes.DefaultData);
    }

    static Marshal(data: SRefreshBattlesTimes): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bossId)
	buffer.writeInt32(data.resetConfigId)
	buffer.writeInt32(data.leftTimes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshBattlesTimes;