
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Production {
	itemId : number;
	nums : number;
}

class Production {
    static DefaultData: Production = {
	itemId : 0,
	nums : 0,
    }

    static Unmarshal(buffer: BufferReader): Production { 
	const reader = buffer
try{
	Production.DefaultData.itemId = reader.readInt32()
	Production.DefaultData.nums = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Production.DefaultData);
    }

    static Marshal(data: Production): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.nums)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Production;