
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetHoldPartyConsume {
}

class CGetHoldPartyConsume {
    static DefaultData: CGetHoldPartyConsume = {
    }

    static Unmarshal(buffer: Buffer): CGetHoldPartyConsume { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetHoldPartyConsume.DefaultData);
    }

    static Marshal(data: CGetHoldPartyConsume): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetHoldPartyConsume;