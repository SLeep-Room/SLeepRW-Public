
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveAll {
}

class CReceiveAll {
    static DefaultData: CReceiveAll = {
    }

    static Unmarshal(buffer: Buffer): CReceiveAll { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveAll.DefaultData);
    }

    static Marshal(data: CReceiveAll): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveAll;