
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCloseShatteredRedPoint {
}

class CCloseShatteredRedPoint {
    static DefaultData: CCloseShatteredRedPoint = {
    }

    static Unmarshal(buffer: Buffer): CCloseShatteredRedPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCloseShatteredRedPoint.DefaultData);
    }

    static Marshal(data: CCloseShatteredRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCloseShatteredRedPoint;