
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CResetBattlesTimes {
	bossId : number;
}

class CResetBattlesTimes {
    static DefaultData: CResetBattlesTimes = {
	bossId : 0,
    }

    static Unmarshal(buffer: Buffer): CResetBattlesTimes { 
	const reader = new BufferReader(buffer)
try{
	CResetBattlesTimes.DefaultData.bossId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CResetBattlesTimes.DefaultData);
    }

    static Marshal(data: CResetBattlesTimes): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bossId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CResetBattlesTimes;