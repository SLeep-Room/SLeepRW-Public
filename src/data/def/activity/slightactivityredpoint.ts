
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLightActivityRedpoint {
	activity : number;
}

class SLightActivityRedpoint {
    static DefaultData: SLightActivityRedpoint = {
	activity : 0,
    }

    static Unmarshal(buffer: Buffer): SLightActivityRedpoint { 
	const reader = new BufferReader(buffer)
try{
	SLightActivityRedpoint.DefaultData.activity = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLightActivityRedpoint.DefaultData);
    }

    static Marshal(data: SLightActivityRedpoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activity)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLightActivityRedpoint;