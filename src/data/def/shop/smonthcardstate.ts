
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import monthcards from '../../bean/shop/monthcardinfo';

interface SMonthCardState {
	monthcards : [number,typeof monthcards.DefaultData][];
}

class SMonthCardState {
    static DefaultData: SMonthCardState = {
	monthcards : [],
    }

    static Unmarshal(buffer: Buffer): SMonthCardState { 
	const reader = new BufferReader(buffer)
try{
	const monthcardsLength = reader.readCompactUInt32();

	for (let i = 0; i < monthcardsLength; i++) {
	    SMonthCardState.DefaultData.monthcards.push([reader.readInt32(),monthcards.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SMonthCardState.DefaultData);
    }

    static Marshal(data: SMonthCardState): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.monthcards).length);
	data.monthcards.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(monthcards.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SMonthCardState;