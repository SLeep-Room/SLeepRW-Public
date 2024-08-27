
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBookActivity {
	isOpen : number;
	itemId : number;
	itemNum : number;
}

class SBookActivity {
    static DefaultData: SBookActivity = {
	isOpen : 0,
	itemId : 0,
	itemNum : 0,
    }

    static Unmarshal(buffer: Buffer): SBookActivity { 
	const reader = new BufferReader(buffer)
try{
	SBookActivity.DefaultData.isOpen = reader.readByte()
	SBookActivity.DefaultData.itemId = reader.readInt32()
	SBookActivity.DefaultData.itemNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBookActivity.DefaultData);
    }

    static Marshal(data: SBookActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeByte(data.isOpen)
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.itemNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBookActivity;