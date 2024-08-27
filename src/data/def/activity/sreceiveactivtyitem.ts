
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import itemlist from '../../bean/item/beans/iteminfo';

interface SReceiveActivtyItem {
	activityLineId : number;
	itemlist : typeof itemlist.DefaultData[];
}

class SReceiveActivtyItem {
    static DefaultData: SReceiveActivtyItem = {
	activityLineId : 0,
	itemlist : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveActivtyItem { 
	const reader = new BufferReader(buffer)
try{
	SReceiveActivtyItem.DefaultData.activityLineId = reader.readInt32()
	const itemlistLength = reader.readCompactUInt32();

	for (let i = 0; i < itemlistLength; i++) {
	    SReceiveActivtyItem.DefaultData.itemlist.push(itemlist.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveActivtyItem.DefaultData);
    }

    static Marshal(data: SReceiveActivtyItem): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityLineId)
	buffer.writeCompactInt32(Object.keys(data.itemlist).length);
	data.itemlist.forEach((value) => {
		buffer.writeBuffer(itemlist.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveActivtyItem;