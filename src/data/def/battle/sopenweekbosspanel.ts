
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import bosses from '../../bean/battle/bossbean';

interface SOpenWeekBossPanel {
	rankId : number;
	bosses : typeof bosses.DefaultData;
}

class SOpenWeekBossPanel {
    static DefaultData: SOpenWeekBossPanel = {
	rankId : 0,
	bosses : bosses.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SOpenWeekBossPanel { 
	const reader = new BufferReader(buffer)
try{
	SOpenWeekBossPanel.DefaultData.rankId = reader.readInt32()
	SOpenWeekBossPanel.DefaultData.bosses = bosses.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenWeekBossPanel.DefaultData);
    }

    static Marshal(data: SOpenWeekBossPanel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rankId)
	buffer.writeBuffer(bosses.Marshal(data.bosses))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenWeekBossPanel;