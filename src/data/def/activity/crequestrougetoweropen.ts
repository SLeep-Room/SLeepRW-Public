
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRequestRougeTowerOpen {
}

class CRequestRougeTowerOpen {
    static DefaultData: CRequestRougeTowerOpen = {
    }

    static Unmarshal(buffer: Buffer): CRequestRougeTowerOpen { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRequestRougeTowerOpen.DefaultData);
    }

    static Marshal(data: CRequestRougeTowerOpen): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRequestRougeTowerOpen;