
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenEchoSnack {
}

class COpenEchoSnack {
    static DefaultData: COpenEchoSnack = {
    }

    static Unmarshal(buffer: Buffer): COpenEchoSnack { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenEchoSnack.DefaultData);
    }

    static Marshal(data: COpenEchoSnack): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenEchoSnack;