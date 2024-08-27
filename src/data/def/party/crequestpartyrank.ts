
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRequestPartyRank {
}

class CRequestPartyRank {
    static DefaultData: CRequestPartyRank = {
    }

    static Unmarshal(buffer: Buffer): CRequestPartyRank { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRequestPartyRank.DefaultData);
    }

    static Marshal(data: CRequestPartyRank): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRequestPartyRank;