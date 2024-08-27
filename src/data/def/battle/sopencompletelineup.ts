
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import completeLineups from '../../bean/battle/completelineup';

interface SOpenCompleteLineup {
	completeLineups : typeof completeLineups.DefaultData[];
}

class SOpenCompleteLineup {
    static DefaultData: SOpenCompleteLineup = {
	completeLineups : [],
    }

    static Unmarshal(buffer: Buffer): SOpenCompleteLineup { 
	const reader = new BufferReader(buffer)
try{
	const completeLineupsLength = reader.readCompactUInt32();

	for (let i = 0; i < completeLineupsLength; i++) {
	    SOpenCompleteLineup.DefaultData.completeLineups.push(completeLineups.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenCompleteLineup.DefaultData);
    }

    static Marshal(data: SOpenCompleteLineup): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.completeLineups).length);
	data.completeLineups.forEach((value) => {
		buffer.writeBuffer(completeLineups.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenCompleteLineup;