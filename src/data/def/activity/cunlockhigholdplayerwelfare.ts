
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUnlockHighOldPlayerWelfare {
}

class CUnlockHighOldPlayerWelfare {
    static DefaultData: CUnlockHighOldPlayerWelfare = {
    }

    static Unmarshal(buffer: Buffer): CUnlockHighOldPlayerWelfare { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUnlockHighOldPlayerWelfare.DefaultData);
    }

    static Marshal(data: CUnlockHighOldPlayerWelfare): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUnlockHighOldPlayerWelfare;