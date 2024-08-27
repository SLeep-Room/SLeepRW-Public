
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenTotalSupportScore {
}

class COpenTotalSupportScore {
    static DefaultData: COpenTotalSupportScore = {
    }

    static Unmarshal(buffer: Buffer): COpenTotalSupportScore { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenTotalSupportScore.DefaultData);
    }

    static Marshal(data: COpenTotalSupportScore): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenTotalSupportScore;