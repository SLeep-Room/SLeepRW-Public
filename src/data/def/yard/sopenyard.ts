
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenYard {
	sceneId : number;
}

class SOpenYard {
    static DefaultData: SOpenYard = {
	sceneId : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenYard { 
	const reader = new BufferReader(buffer)
try{
	SOpenYard.DefaultData.sceneId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenYard.DefaultData);
    }

    static Marshal(data: SOpenYard): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenYard;