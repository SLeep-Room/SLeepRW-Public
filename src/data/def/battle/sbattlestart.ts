
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import battleInfo from '../../bean/battle/battleinfo';

interface SBattleStart {
	battleInfo : typeof battleInfo.DefaultData;
}

class SBattleStart {
    static DefaultData: SBattleStart = {
	battleInfo : battleInfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SBattleStart { 
	const reader = new BufferReader(buffer)
try{
	SBattleStart.DefaultData.battleInfo = battleInfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBattleStart.DefaultData);
    }

    static Marshal(data: SBattleStart): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(battleInfo.Marshal(data.battleInfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBattleStart;