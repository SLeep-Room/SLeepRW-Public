
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCollectAll {
}

class CCollectAll {
    static DefaultData: CCollectAll = {
    }

    static Unmarshal(buffer: Buffer): CCollectAll { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCollectAll.DefaultData);
    }

    static Marshal(data: CCollectAll): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCollectAll;