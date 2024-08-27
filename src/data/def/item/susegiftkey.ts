
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUseGiftKey {
}

class SUseGiftKey {
    static DefaultData: SUseGiftKey = {
    }

    static Unmarshal(buffer: Buffer): SUseGiftKey { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUseGiftKey.DefaultData);
    }

    static Marshal(data: SUseGiftKey): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUseGiftKey;