
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReFreshMailCDTime {
}

class CReFreshMailCDTime {
    static DefaultData: CReFreshMailCDTime = {
    }

    static Unmarshal(buffer: Buffer): CReFreshMailCDTime { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReFreshMailCDTime.DefaultData);
    }

    static Marshal(data: CReFreshMailCDTime): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReFreshMailCDTime;