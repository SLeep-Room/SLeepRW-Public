
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenShop {
}

class COpenShop {
    static DefaultData: COpenShop = {
    }

    static Unmarshal(buffer: Buffer): COpenShop { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenShop.DefaultData);
    }

    static Marshal(data: COpenShop): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenShop;