
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenBackGift {
}

class COpenBackGift {
    static DefaultData: COpenBackGift = {
    }

    static Unmarshal(buffer: Buffer): COpenBackGift { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenBackGift.DefaultData);
    }

    static Marshal(data: COpenBackGift): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenBackGift;