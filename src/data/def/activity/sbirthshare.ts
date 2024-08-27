
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBirthShare {
}

class SBirthShare {
    static DefaultData: SBirthShare = {
    }

    static Unmarshal(buffer: Buffer): SBirthShare { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBirthShare.DefaultData);
    }

    static Marshal(data: SBirthShare): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBirthShare;