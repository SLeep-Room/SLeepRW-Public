
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDeleteRead {
}

class CDeleteRead {
    static DefaultData: CDeleteRead = {
    }

    static Unmarshal(buffer: Buffer): CDeleteRead { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDeleteRead.DefaultData);
    }

    static Marshal(data: CDeleteRead): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDeleteRead;