
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveMaxLevel {
}

class CReceiveMaxLevel {
    static DefaultData: CReceiveMaxLevel = {
    }

    static Unmarshal(buffer: Buffer): CReceiveMaxLevel { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveMaxLevel.DefaultData);
    }

    static Marshal(data: CReceiveMaxLevel): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveMaxLevel;