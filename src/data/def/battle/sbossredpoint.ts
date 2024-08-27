
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBossRedPoint {
}

class SBossRedPoint {
    static DefaultData: SBossRedPoint = {
    }

    static Unmarshal(buffer: Buffer): SBossRedPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBossRedPoint.DefaultData);
    }

    static Marshal(data: SBossRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBossRedPoint;