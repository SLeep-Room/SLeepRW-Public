
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenChristmasDinner {
}

class COpenChristmasDinner {
    static DefaultData: COpenChristmasDinner = {
    }

    static Unmarshal(buffer: Buffer): COpenChristmasDinner { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenChristmasDinner.DefaultData);
    }

    static Marshal(data: COpenChristmasDinner): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenChristmasDinner;