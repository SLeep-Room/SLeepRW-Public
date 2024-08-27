
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CHavingEchoSnack {
}

class CHavingEchoSnack {
    static DefaultData: CHavingEchoSnack = {
    }

    static Unmarshal(buffer: Buffer): CHavingEchoSnack { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CHavingEchoSnack.DefaultData);
    }

    static Marshal(data: CHavingEchoSnack): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CHavingEchoSnack;