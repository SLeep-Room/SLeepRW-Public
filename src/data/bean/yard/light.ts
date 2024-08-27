
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Light {
	key : number;
	itemId : number;
}

class Light {
    static DefaultData: Light = {
	key : 0,
	itemId : 0,
    }

    static Unmarshal(buffer: BufferReader): Light { 
	const reader = buffer
try{
	Light.DefaultData.key = reader.readInt32()
	Light.DefaultData.itemId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Light.DefaultData);
    }

    static Marshal(data: Light): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)
	buffer.writeInt32(data.itemId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Light;