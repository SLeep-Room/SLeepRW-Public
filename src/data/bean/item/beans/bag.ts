
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';
import items from '../../../bean/item/beans/item';

interface Bag {
	capacity : number;
	items : typeof items.DefaultData[];
}

class Bag {
    static DefaultData: Bag = {
	capacity : 0,
	items : [],
    }

    static Unmarshal(buffer: BufferReader): Bag { 
	const reader = buffer
try{
	Bag.DefaultData.capacity = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    Bag.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Bag.DefaultData);
    }

    static Marshal(data: Bag): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.capacity)
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Bag;