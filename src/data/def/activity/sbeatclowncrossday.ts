
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBeatClownCrossDay {
}

class SBeatClownCrossDay {
    static DefaultData: SBeatClownCrossDay = {
    }

    static Unmarshal(buffer: Buffer): SBeatClownCrossDay { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBeatClownCrossDay.DefaultData);
    }

    static Marshal(data: SBeatClownCrossDay): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBeatClownCrossDay;