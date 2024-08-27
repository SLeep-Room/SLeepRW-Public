
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SReceiveDungeonWorldAward {
	id : number;
	items : typeof items.DefaultData[];
}

class SReceiveDungeonWorldAward {
    static DefaultData: SReceiveDungeonWorldAward = {
	id : 0,
	items : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveDungeonWorldAward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveDungeonWorldAward.DefaultData.id = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SReceiveDungeonWorldAward.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveDungeonWorldAward.DefaultData);
    }

    static Marshal(data: SReceiveDungeonWorldAward): Buffer { 
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


export default SReceiveDungeonWorldAward;