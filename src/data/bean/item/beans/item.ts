
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';
import extra from '../../../bean/item/beans/equipment';

interface Item {
	id : number;
	itemtype : number;
	flags : number;
	key : number;
	position : number;
	number : number;
	delTime : bigint[];
	extra : typeof extra.DefaultData;
}

class Item {
    static DefaultData: Item = {
	id : 0,
	itemtype : 0,
	flags : 0,
	key : 0,
	position : 0,
	number : 0,
	delTime : [],
	extra : extra.DefaultData,
    }

    static Unmarshal(buffer: BufferReader): Item { 
	const reader = buffer
try{
	Item.DefaultData.id = reader.readInt32()
	Item.DefaultData.itemtype = reader.readInt32()
	Item.DefaultData.flags = reader.readInt32()
	Item.DefaultData.key = reader.readInt32()
	Item.DefaultData.position = reader.readInt32()
	Item.DefaultData.number = reader.readInt32()
	const delTimeLength = reader.readCompactUInt32();

	for (let i = 0; i < delTimeLength; i++) {
	    Item.DefaultData.delTime.push(reader.readInt64());
	}
	Item.DefaultData.extra = extra.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Item.DefaultData);
    }

    static Marshal(data: Item): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.itemtype)
	buffer.writeInt32(data.flags)
	buffer.writeInt32(data.key)
	buffer.writeInt32(data.position)
	buffer.writeInt32(data.number)
	buffer.writeCompactInt32(Object.keys(data.delTime).length);
	data.delTime.forEach((value) => {
		buffer.writeInt64(BigInt(value))
	});
	buffer.writeBuffer(extra.Marshal(data.extra))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Item;