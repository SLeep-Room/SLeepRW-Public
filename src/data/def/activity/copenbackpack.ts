
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenBackPack {
}

class COpenBackPack {
    static DefaultData: COpenBackPack = {
    }

    static Unmarshal(buffer: Buffer): COpenBackPack { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenBackPack.DefaultData);
    }

    static Marshal(data: COpenBackPack): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenBackPack;