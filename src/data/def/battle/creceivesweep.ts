
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveSweep {
}

class CReceiveSweep {
    static DefaultData: CReceiveSweep = {
    }

    static Unmarshal(buffer: Buffer): CReceiveSweep { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveSweep.DefaultData);
    }

    static Marshal(data: CReceiveSweep): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveSweep;