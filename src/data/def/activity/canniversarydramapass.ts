
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAnniversaryDramaPass {
}

class CAnniversaryDramaPass {
    static DefaultData: CAnniversaryDramaPass = {
    }

    static Unmarshal(buffer: Buffer): CAnniversaryDramaPass { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAnniversaryDramaPass.DefaultData);
    }

    static Marshal(data: CAnniversaryDramaPass): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAnniversaryDramaPass;