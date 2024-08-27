
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import lineupsInfo from '../../bean/battle/enemylineup';

interface SEnemyLineupsCell {
	refreshTimes : number;
	lineupsInfo : typeof lineupsInfo.DefaultData[];
}

class SEnemyLineupsCell {
    static DefaultData: SEnemyLineupsCell = {
	refreshTimes : 0,
	lineupsInfo : [],
    }

    static Unmarshal(buffer: Buffer): SEnemyLineupsCell { 
	const reader = new BufferReader(buffer)
try{
	SEnemyLineupsCell.DefaultData.refreshTimes = reader.readInt32()
	const lineupsInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < lineupsInfoLength; i++) {
	    SEnemyLineupsCell.DefaultData.lineupsInfo.push(lineupsInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEnemyLineupsCell.DefaultData);
    }

    static Marshal(data: SEnemyLineupsCell): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.refreshTimes)
	buffer.writeCompactInt32(Object.keys(data.lineupsInfo).length);
	data.lineupsInfo.forEach((value) => {
		buffer.writeBuffer(lineupsInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEnemyLineupsCell;