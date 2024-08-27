
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveReturnMaxLevel {
}

class CReceiveReturnMaxLevel {
    static DefaultData: CReceiveReturnMaxLevel = {
    }

    static Unmarshal(buffer: Buffer): CReceiveReturnMaxLevel { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveReturnMaxLevel.DefaultData);
    }

    static Marshal(data: CReceiveReturnMaxLevel): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveReturnMaxLevel;