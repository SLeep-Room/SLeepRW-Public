
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAddEmoji {
	eomjiId : number;
}

class SAddEmoji {
    static DefaultData: SAddEmoji = {
	eomjiId : 0,
    }

    static Unmarshal(buffer: Buffer): SAddEmoji { 
	const reader = new BufferReader(buffer)
try{
	SAddEmoji.DefaultData.eomjiId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddEmoji.DefaultData);
    }

    static Marshal(data: SAddEmoji): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.eomjiId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAddEmoji;