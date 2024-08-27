
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CPayToBuyAgCoinLevel {
}

class CPayToBuyAgCoinLevel {
    static DefaultData: CPayToBuyAgCoinLevel = {
    }

    static Unmarshal(buffer: Buffer): CPayToBuyAgCoinLevel { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CPayToBuyAgCoinLevel.DefaultData);
    }

    static Marshal(data: CPayToBuyAgCoinLevel): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CPayToBuyAgCoinLevel;