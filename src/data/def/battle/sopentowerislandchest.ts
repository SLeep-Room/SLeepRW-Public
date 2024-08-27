
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SOpenTowerIslandChest {
	islandID : number;
	resultType : number;
	items : typeof items.DefaultData[];
	effect : number;
}

class SOpenTowerIslandChest {
    static DefaultData: SOpenTowerIslandChest = {
	islandID : 0,
	resultType : 0,
	items : [],
	effect : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenTowerIslandChest { 
	const reader = new BufferReader(buffer)
try{
	SOpenTowerIslandChest.DefaultData.islandID = reader.readInt32()
	SOpenTowerIslandChest.DefaultData.resultType = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SOpenTowerIslandChest.DefaultData.items.push(items.Unmarshal(reader));
	}
	SOpenTowerIslandChest.DefaultData.effect = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenTowerIslandChest.DefaultData);
    }

    static Marshal(data: SOpenTowerIslandChest): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.islandID)
	buffer.writeInt32(data.resultType)
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});
	buffer.writeInt32(data.effect)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenTowerIslandChest;