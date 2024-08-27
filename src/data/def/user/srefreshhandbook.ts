
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshHandbook {
	id : number;
	bookType : number;
}

class SRefreshHandbook {
    static DefaultData: SRefreshHandbook = {
	id : 0,
	bookType : 0,
    }

    static Unmarshal(buffer: Buffer): SRefreshHandbook { 
	const reader = new BufferReader(buffer)
try{
	SRefreshHandbook.DefaultData.id = reader.readInt32()
	SRefreshHandbook.DefaultData.bookType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshHandbook.DefaultData);
    }

    static Marshal(data: SRefreshHandbook): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.bookType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshHandbook;