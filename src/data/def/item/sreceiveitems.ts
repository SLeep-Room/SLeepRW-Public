
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import itemList from '../../bean/item/beans/iteminfo';

interface SReceiveItems {
	itemList : typeof itemList.DefaultData[];
}

class SReceiveItems {
    static DefaultData: SReceiveItems = {
	itemList : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveItems { 
	const reader = new BufferReader(buffer)
try{
	const itemListLength = reader.readCompactUInt32();

	for (let i = 0; i < itemListLength; i++) {
	    SReceiveItems.DefaultData.itemList.push(itemList.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveItems.DefaultData);
    }

    static Marshal(data: SReceiveItems): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.itemList).length);
	data.itemList.forEach((value) => {
		buffer.writeBuffer(itemList.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveItems;