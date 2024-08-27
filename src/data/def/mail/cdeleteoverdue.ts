
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDeleteOverdue {
}

class CDeleteOverdue {
    static DefaultData: CDeleteOverdue = {
    }

    static Unmarshal(buffer: Buffer): CDeleteOverdue { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDeleteOverdue.DefaultData);
    }

    static Marshal(data: CDeleteOverdue): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDeleteOverdue;