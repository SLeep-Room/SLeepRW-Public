
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SReceiveDungeonPointAward {
	id : number;
	items : typeof items.DefaultData[];
}

class SReceiveDungeonPointAward {
    static DefaultData: SReceiveDungeonPointAward = {
	id : 0,
	items : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveDungeonPointAward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveDungeonPointAward.DefaultData.id = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SReceiveDungeonPointAward.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveDungeonPointAward.DefaultData);
    }

    static Marshal(data: SReceiveDungeonPointAward): Buffer { 
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


export default SReceiveDungeonPointAward;