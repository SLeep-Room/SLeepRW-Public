
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CInterruptSweep {
}

class CInterruptSweep {
    static DefaultData: CInterruptSweep = {
    }

    static Unmarshal(buffer: Buffer): CInterruptSweep { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CInterruptSweep.DefaultData);
    }

    static Marshal(data: CInterruptSweep): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CInterruptSweep;