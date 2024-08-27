
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import itemList from '../../bean/item/beans/iteminfo';

interface SExchangeItems {
	activityId : number;
	itemList : typeof itemList.DefaultData[];
}

class SExchangeItems {
    static DefaultData: SExchangeItems = {
	activityId : 0,
	itemList : [],
    }

    static Unmarshal(buffer: Buffer): SExchangeItems { 
	const reader = new BufferReader(buffer)
try{
	SExchangeItems.DefaultData.activityId = reader.readInt32()
	const itemListLength = reader.readCompactUInt32();

	for (let i = 0; i < itemListLength; i++) {
	    SExchangeItems.DefaultData.itemList.push(itemList.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SExchangeItems.DefaultData);
    }

    static Marshal(data: SExchangeItems): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeCompactInt32(Object.keys(data.itemList).length);
	data.itemList.forEach((value) => {
		buffer.writeBuffer(itemList.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SExchangeItems;