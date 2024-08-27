
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveAllOldPlayerWelfare {
}

class CReceiveAllOldPlayerWelfare {
    static DefaultData: CReceiveAllOldPlayerWelfare = {
    }

    static Unmarshal(buffer: Buffer): CReceiveAllOldPlayerWelfare { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveAllOldPlayerWelfare.DefaultData);
    }

    static Marshal(data: CReceiveAllOldPlayerWelfare): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveAllOldPlayerWelfare;