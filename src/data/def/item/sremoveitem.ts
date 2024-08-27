
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRemoveItem {
	bagType : number;
	itemKey : number;
}

class SRemoveItem {
    static DefaultData: SRemoveItem = {
	bagType : 0,
	itemKey : 0,
    }

    static Unmarshal(buffer: Buffer): SRemoveItem { 
	const reader = new BufferReader(buffer)
try{
	SRemoveItem.DefaultData.bagType = reader.readInt32()
	SRemoveItem.DefaultData.itemKey = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRemoveItem.DefaultData);
    }

    static Marshal(data: SRemoveItem): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bagType)
	buffer.writeInt32(data.itemKey)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRemoveItem;