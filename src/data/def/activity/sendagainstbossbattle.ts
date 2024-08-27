
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import bossInfo from '../../bean/activity/bossinfo';

interface SEndAgainstBossBattle {
	bossInfo : typeof bossInfo.DefaultData;
}

class SEndAgainstBossBattle {
    static DefaultData: SEndAgainstBossBattle = {
	bossInfo : bossInfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SEndAgainstBossBattle { 
	const reader = new BufferReader(buffer)
try{
	SEndAgainstBossBattle.DefaultData.bossInfo = bossInfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEndAgainstBossBattle.DefaultData);
    }

    static Marshal(data: SEndAgainstBossBattle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(bossInfo.Marshal(data.bossInfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEndAgainstBossBattle;