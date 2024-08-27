
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SSureDrawTenCard {
	items : typeof items.DefaultData[];
}

class SSureDrawTenCard {
    static DefaultData: SSureDrawTenCard = {
	items : [],
    }

    static Unmarshal(buffer: Buffer): SSureDrawTenCard { 
	const reader = new BufferReader(buffer)
try{
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SSureDrawTenCard.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSureDrawTenCard.DefaultData);
    }

    static Marshal(data: SSureDrawTenCard): Buffer { 
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


export default SSureDrawTenCard;