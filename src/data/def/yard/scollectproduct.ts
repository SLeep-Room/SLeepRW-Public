
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SCollectProduct {
	items : typeof items.DefaultData[];
}

class SCollectProduct {
    static DefaultData: SCollectProduct = {
	items : [],
    }

    static Unmarshal(buffer: Buffer): SCollectProduct { 
	const reader = new BufferReader(buffer)
try{
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SCollectProduct.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCollectProduct.DefaultData);
    }

    static Marshal(data: SCollectProduct): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCollectProduct;