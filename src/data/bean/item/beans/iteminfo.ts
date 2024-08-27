
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';

interface ItemInfo {
	gain : number;
	id : number;
	itemtype : number;
	bagtype : number;
	number : number;
	delTime : bigint[];
}

class ItemInfo {
    static DefaultData: ItemInfo = {
		gain : 0,
		id : 0,
		itemtype : 0,
		bagtype : 0,
		number : 0,
		delTime : [],
    }

    static Unmarshal(buffer: BufferReader): ItemInfo { 
	const reader = buffer
try{
	ItemInfo.DefaultData.gain = reader.readInt32()
	ItemInfo.DefaultData.id = reader.readInt32()
	ItemInfo.DefaultData.itemtype = reader.readInt32()
	ItemInfo.DefaultData.bagtype = reader.readInt32()
	ItemInfo.DefaultData.number = reader.readInt32()
	const delTimeLength = reader.readCompactUInt32();

	for (let i = 0; i < delTimeLength; i++) {
	    ItemInfo.DefaultData.delTime.push(reader.readInt64());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ItemInfo.DefaultData);
    }

    static Marshal(data: ItemInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.gain)
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.itemtype)
	buffer.writeInt32(data.bagtype)
	buffer.writeInt32(data.number)
	buffer.writeCompactInt32(Object.keys(data.delTime).length);
	data.delTime.forEach((value) => {
		buffer.writeInt64(BigInt(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ItemInfo;