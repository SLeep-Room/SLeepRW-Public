
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import bosses from '../../bean/battle/bossbean';

interface SOpenBossPanel {
	bosses : typeof bosses.DefaultData[];
}

class SOpenBossPanel {
    static DefaultData: SOpenBossPanel = {
	bosses : [],
    }

    static Unmarshal(buffer: Buffer): SOpenBossPanel { 
	const reader = new BufferReader(buffer)
try{
	const bossesLength = reader.readCompactUInt32();

	for (let i = 0; i < bossesLength; i++) {
	    SOpenBossPanel.DefaultData.bosses.push(bosses.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenBossPanel.DefaultData);
    }

    static Marshal(data: SOpenBossPanel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.bosses).length);
	data.bosses.forEach((value) => {
		buffer.writeBuffer(bosses.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenBossPanel;