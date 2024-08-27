
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import againstBossInfo from '../../bean/activity/againstbossinfo';

interface SReturnAgainstBossInfo {
	againstBossInfo : typeof againstBossInfo.DefaultData;
	bossId : number;
}

class SReturnAgainstBossInfo {
    static DefaultData: SReturnAgainstBossInfo = {
	againstBossInfo : againstBossInfo.DefaultData,
	bossId : 0,
    }

    static Unmarshal(buffer: Buffer): SReturnAgainstBossInfo { 
	const reader = new BufferReader(buffer)
try{
	SReturnAgainstBossInfo.DefaultData.againstBossInfo = againstBossInfo.Unmarshal(reader)
	SReturnAgainstBossInfo.DefaultData.bossId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReturnAgainstBossInfo.DefaultData);
    }

    static Marshal(data: SReturnAgainstBossInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(againstBossInfo.Marshal(data.againstBossInfo))
	buffer.writeInt32(data.bossId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReturnAgainstBossInfo;