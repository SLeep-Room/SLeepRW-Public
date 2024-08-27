
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface LightItem {
	itemId : number;
	itemNums : number;
}

class LightItem {
    static DefaultData: LightItem = {
	itemId : 0,
	itemNums : 0,
    }

    static Unmarshal(buffer: BufferReader): LightItem { 
	const reader = buffer
try{
	LightItem.DefaultData.itemId = reader.readInt32()
	LightItem.DefaultData.itemNums = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},LightItem.DefaultData);
    }

    static Marshal(data: LightItem): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.itemNums)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default LightItem;