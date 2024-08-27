
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUseConsumableItem {
	itemIds : number[];
}

class CUseConsumableItem {
    static DefaultData: CUseConsumableItem = {
	itemIds : [],
    }

    static Unmarshal(buffer: Buffer): CUseConsumableItem { 
	const reader = new BufferReader(buffer)
try{
	const itemIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemIdsLength; i++) {
	    CUseConsumableItem.DefaultData.itemIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUseConsumableItem.DefaultData);
    }

    static Marshal(data: CUseConsumableItem): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.itemIds).length);
	data.itemIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUseConsumableItem;