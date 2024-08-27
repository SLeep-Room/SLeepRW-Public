
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUnlockHigh {
}

class CUnlockHigh {
    static DefaultData: CUnlockHigh = {
    }

    static Unmarshal(buffer: Buffer): CUnlockHigh { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUnlockHigh.DefaultData);
    }

    static Marshal(data: CUnlockHigh): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUnlockHigh;