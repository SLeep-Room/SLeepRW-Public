
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenParty {
}

class COpenParty {
    static DefaultData: COpenParty = {
    }

    static Unmarshal(buffer: Buffer): COpenParty { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenParty.DefaultData);
    }

    static Marshal(data: COpenParty): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenParty;