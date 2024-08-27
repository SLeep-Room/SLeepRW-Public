
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import battleInfo from '../../bean/activity/foolsdaycopybattle';

interface SOpenFoolsCopyBattle {
	battleInfo : typeof battleInfo.DefaultData[];
}

class SOpenFoolsCopyBattle {
    static DefaultData: SOpenFoolsCopyBattle = {
	battleInfo : [],
    }

    static Unmarshal(buffer: Buffer): SOpenFoolsCopyBattle { 
	const reader = new BufferReader(buffer)
try{
	const battleInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < battleInfoLength; i++) {
	    SOpenFoolsCopyBattle.DefaultData.battleInfo.push(battleInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenFoolsCopyBattle.DefaultData);
    }

    static Marshal(data: SOpenFoolsCopyBattle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.battleInfo).length);
	data.battleInfo.forEach((value) => {
		buffer.writeBuffer(battleInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenFoolsCopyBattle;