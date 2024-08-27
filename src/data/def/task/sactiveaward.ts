
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import itemList from '../../bean/item/beans/iteminfo';

interface SActiveAward {
	activeValue : number;
	gold : number;
	itemList : typeof itemList.DefaultData[];
}

class SActiveAward {
    static DefaultData: SActiveAward = {
	activeValue : 0,
	gold : 0,
	itemList : [],
    }

    static Unmarshal(buffer: Buffer): SActiveAward { 
	const reader = new BufferReader(buffer)
try{
	SActiveAward.DefaultData.activeValue = reader.readInt32()
	SActiveAward.DefaultData.gold = reader.readInt32()
	const itemListLength = reader.readCompactUInt32();

	for (let i = 0; i < itemListLength; i++) {
	    SActiveAward.DefaultData.itemList.push(itemList.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SActiveAward.DefaultData);
    }

    static Marshal(data: SActiveAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activeValue)
	buffer.writeInt32(data.gold)
	buffer.writeCompactInt32(Object.keys(data.itemList).length);
	data.itemList.forEach((value) => {
		buffer.writeBuffer(itemList.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SActiveAward;