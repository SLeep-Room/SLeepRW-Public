
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBackGiftRedPoint {
}

class SBackGiftRedPoint {
    static DefaultData: SBackGiftRedPoint = {
    }

    static Unmarshal(buffer: Buffer): SBackGiftRedPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBackGiftRedPoint.DefaultData);
    }

    static Marshal(data: SBackGiftRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBackGiftRedPoint;