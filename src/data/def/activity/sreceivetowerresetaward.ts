
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SReceiveTowerResetAward {
	passedPoints : number;
	items : typeof items.DefaultData[];
}

class SReceiveTowerResetAward {
    static DefaultData: SReceiveTowerResetAward = {
	passedPoints : 0,
	items : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveTowerResetAward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveTowerResetAward.DefaultData.passedPoints = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SReceiveTowerResetAward.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveTowerResetAward.DefaultData);
    }

    static Marshal(data: SReceiveTowerResetAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.passedPoints)
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveTowerResetAward;