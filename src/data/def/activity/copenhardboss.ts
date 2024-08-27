
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenHardBoss {
}

class COpenHardBoss {
    static DefaultData: COpenHardBoss = {
    }

    static Unmarshal(buffer: Buffer): COpenHardBoss { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenHardBoss.DefaultData);
    }

    static Marshal(data: COpenHardBoss): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenHardBoss;