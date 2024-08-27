
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface unlockItem {
	itemId : number;
	itemNum : number;
}

class unlockItem {
    static DefaultData: unlockItem = {
	itemId : 0,
	itemNum : 0,
    }

    static Unmarshal(buffer: BufferReader): unlockItem { 
	const reader = buffer
try{
	unlockItem.DefaultData.itemId = reader.readInt32()
	unlockItem.DefaultData.itemNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},unlockItem.DefaultData);
    }

    static Marshal(data: unlockItem): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.itemNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default unlockItem;