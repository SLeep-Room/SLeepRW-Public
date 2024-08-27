
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SDungeonOption {
	optionId : number;
	items : typeof items.DefaultData[];
}

class SDungeonOption {
    static DefaultData: SDungeonOption = {
	optionId : 0,
	items : [],
    }

    static Unmarshal(buffer: Buffer): SDungeonOption { 
	const reader = new BufferReader(buffer)
try{
	SDungeonOption.DefaultData.optionId = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SDungeonOption.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDungeonOption.DefaultData);
    }

    static Marshal(data: SDungeonOption): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.optionId)
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDungeonOption;