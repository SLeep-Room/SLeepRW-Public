
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface battlebuff {
	id : number;
	num : number;
}

class battlebuff {
    static DefaultData: battlebuff = {
	id : 0,
	num : 0,
    }

    static Unmarshal(buffer: BufferReader): battlebuff { 
	const reader = buffer
try{
	battlebuff.DefaultData.id = reader.readInt32()
	battlebuff.DefaultData.num = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},battlebuff.DefaultData);
    }

    static Marshal(data: battlebuff): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.num)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default battlebuff;