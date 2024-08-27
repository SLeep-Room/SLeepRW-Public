
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ItemParam {
	itemid : number;
	itemnum : number;
}

class ItemParam {
    static DefaultData: ItemParam = {
	itemid : 0,
	itemnum : 0,
    }

    static Unmarshal(buffer: BufferReader): ItemParam { 
	const reader = buffer
try{
	ItemParam.DefaultData.itemid = reader.readInt32()
	ItemParam.DefaultData.itemnum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ItemParam.DefaultData);
    }

    static Marshal(data: ItemParam): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemid)
	buffer.writeInt32(data.itemnum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ItemParam;