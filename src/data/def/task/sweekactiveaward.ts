
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import awards from '../../bean/item/beans/iteminfo';

interface SWeekActiveAward {
	value : number;
	awards : typeof awards.DefaultData[];
}

class SWeekActiveAward {
    static DefaultData: SWeekActiveAward = {
	value : 0,
	awards : [],
    }

    static Unmarshal(buffer: Buffer): SWeekActiveAward { 
	const reader = new BufferReader(buffer)
try{
	SWeekActiveAward.DefaultData.value = reader.readInt32()
	const awardsLength = reader.readCompactUInt32();

	for (let i = 0; i < awardsLength; i++) {
	    SWeekActiveAward.DefaultData.awards.push(awards.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SWeekActiveAward.DefaultData);
    }

    static Marshal(data: SWeekActiveAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.value)
	buffer.writeCompactInt32(Object.keys(data.awards).length);
	data.awards.forEach((value) => {
		buffer.writeBuffer(awards.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SWeekActiveAward;