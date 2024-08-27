
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Collection {
	level : number;
	state : number;
	itemId : number;
	itemNum : number;
}

class Collection {
    static DefaultData: Collection = {
	level : 0,
	state : 0,
	itemId : 0,
	itemNum : 0,
    }

    static Unmarshal(buffer: BufferReader): Collection { 
	const reader = buffer
try{
	Collection.DefaultData.level = reader.readInt32()
	Collection.DefaultData.state = reader.readInt32()
	Collection.DefaultData.itemId = reader.readInt32()
	Collection.DefaultData.itemNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Collection.DefaultData);
    }

    static Marshal(data: Collection): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.state)
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.itemNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Collection;