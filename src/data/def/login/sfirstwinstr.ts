
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SFirstWinSTR {
}

class SFirstWinSTR {
    static DefaultData: SFirstWinSTR = {
    }

    static Unmarshal(buffer: Buffer): SFirstWinSTR { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SFirstWinSTR.DefaultData);
    }

    static Marshal(data: SFirstWinSTR): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SFirstWinSTR;