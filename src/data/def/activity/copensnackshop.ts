
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenSnackShop {
}

class COpenSnackShop {
    static DefaultData: COpenSnackShop = {
    }

    static Unmarshal(buffer: Buffer): COpenSnackShop { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenSnackShop.DefaultData);
    }

    static Marshal(data: COpenSnackShop): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenSnackShop;