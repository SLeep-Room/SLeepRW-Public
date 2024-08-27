
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CHavingSnack {
}

class CHavingSnack {
    static DefaultData: CHavingSnack = {
    }

    static Unmarshal(buffer: Buffer): CHavingSnack { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CHavingSnack.DefaultData);
    }

    static Marshal(data: CHavingSnack): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CHavingSnack;