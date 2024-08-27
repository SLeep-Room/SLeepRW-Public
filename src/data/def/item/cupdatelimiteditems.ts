
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUpdateLimitedItems {
	itemKey : number;
	itemId : number;
}

class CUpdateLimitedItems {
    static DefaultData: CUpdateLimitedItems = {
	itemKey : 0,
	itemId : 0,
    }

    static Unmarshal(buffer: Buffer): CUpdateLimitedItems { 
	const reader = new BufferReader(buffer)
try{
	CUpdateLimitedItems.DefaultData.itemKey = reader.readInt32()
	CUpdateLimitedItems.DefaultData.itemId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUpdateLimitedItems.DefaultData);
    }

    static Marshal(data: CUpdateLimitedItems): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemKey)
	buffer.writeInt32(data.itemId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUpdateLimitedItems;