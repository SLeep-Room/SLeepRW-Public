
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBackTaskRedPoint {
}

class SBackTaskRedPoint {
    static DefaultData: SBackTaskRedPoint = {
    }

    static Unmarshal(buffer: Buffer): SBackTaskRedPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBackTaskRedPoint.DefaultData);
    }

    static Marshal(data: SBackTaskRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBackTaskRedPoint;