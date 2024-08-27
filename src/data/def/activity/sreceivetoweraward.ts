
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SReceiveTowerAward {
	id : number;
	items : typeof items.DefaultData[];
}

class SReceiveTowerAward {
    static DefaultData: SReceiveTowerAward = {
	id : 0,
	items : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveTowerAward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveTowerAward.DefaultData.id = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SReceiveTowerAward.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveTowerAward.DefaultData);
    }

    static Marshal(data: SReceiveTowerAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveTowerAward;