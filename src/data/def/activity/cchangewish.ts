
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeWish {
	index : number;
}

class CChangeWish {
    static DefaultData: CChangeWish = {
	index : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeWish { 
	const reader = new BufferReader(buffer)
try{
	CChangeWish.DefaultData.index = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeWish.DefaultData);
    }

    static Marshal(data: CChangeWish): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeWish;