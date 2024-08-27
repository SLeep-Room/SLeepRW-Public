
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAnniversaryShare {
}

class CAnniversaryShare {
    static DefaultData: CAnniversaryShare = {
    }

    static Unmarshal(buffer: Buffer): CAnniversaryShare { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAnniversaryShare.DefaultData);
    }

    static Marshal(data: CAnniversaryShare): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAnniversaryShare;