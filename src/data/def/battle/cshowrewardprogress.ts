
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CShowRewardProgress {
}

class CShowRewardProgress {
    static DefaultData: CShowRewardProgress = {
    }

    static Unmarshal(buffer: Buffer): CShowRewardProgress { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CShowRewardProgress.DefaultData);
    }

    static Marshal(data: CShowRewardProgress): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CShowRewardProgress;