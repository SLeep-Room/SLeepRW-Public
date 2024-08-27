
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SShatteredRedPoint {
}

class SShatteredRedPoint {
    static DefaultData: SShatteredRedPoint = {
    }

    static Unmarshal(buffer: Buffer): SShatteredRedPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShatteredRedPoint.DefaultData);
    }

    static Marshal(data: SShatteredRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShatteredRedPoint;