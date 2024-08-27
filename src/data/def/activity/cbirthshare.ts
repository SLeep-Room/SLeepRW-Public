
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBirthShare {
}

class CBirthShare {
    static DefaultData: CBirthShare = {
    }

    static Unmarshal(buffer: Buffer): CBirthShare { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBirthShare.DefaultData);
    }

    static Marshal(data: CBirthShare): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBirthShare;