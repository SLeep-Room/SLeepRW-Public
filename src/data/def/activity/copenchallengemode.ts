
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenChallengeMode {
}

class COpenChallengeMode {
    static DefaultData: COpenChallengeMode = {
    }

    static Unmarshal(buffer: Buffer): COpenChallengeMode { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenChallengeMode.DefaultData);
    }

    static Marshal(data: COpenChallengeMode): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenChallengeMode;