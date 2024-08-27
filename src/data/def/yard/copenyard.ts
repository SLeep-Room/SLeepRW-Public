
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenYard {
}

class COpenYard {
    static DefaultData: COpenYard = {
    }

    static Unmarshal(buffer: Buffer): COpenYard { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenYard.DefaultData);
    }

    static Marshal(data: COpenYard): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenYard;