
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshBackGift {
}

class SRefreshBackGift {
    static DefaultData: SRefreshBackGift = {
    }

    static Unmarshal(buffer: Buffer): SRefreshBackGift { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshBackGift.DefaultData);
    }

    static Marshal(data: SRefreshBackGift): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshBackGift;