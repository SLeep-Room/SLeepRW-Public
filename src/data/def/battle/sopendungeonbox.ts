
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SOpenDungeonBox {
	boxId : number;
	items : typeof items.DefaultData[];
}

class SOpenDungeonBox {
    static DefaultData: SOpenDungeonBox = {
	boxId : 0,
	items : [],
    }

    static Unmarshal(buffer: Buffer): SOpenDungeonBox { 
	const reader = new BufferReader(buffer)
try{
	SOpenDungeonBox.DefaultData.boxId = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SOpenDungeonBox.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenDungeonBox.DefaultData);
    }

    static Marshal(data: SOpenDungeonBox): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.boxId)
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenDungeonBox;