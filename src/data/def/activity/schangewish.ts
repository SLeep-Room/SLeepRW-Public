
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeWish {
	index : number;
}

class SChangeWish {
    static DefaultData: SChangeWish = {
	index : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeWish { 
	const reader = new BufferReader(buffer)
try{
	SChangeWish.DefaultData.index = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeWish.DefaultData);
    }

    static Marshal(data: SChangeWish): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeWish;