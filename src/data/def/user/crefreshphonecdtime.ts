
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReFreshPhoneCDTime {
}

class CReFreshPhoneCDTime {
    static DefaultData: CReFreshPhoneCDTime = {
    }

    static Unmarshal(buffer: Buffer): CReFreshPhoneCDTime { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReFreshPhoneCDTime.DefaultData);
    }

    static Marshal(data: CReFreshPhoneCDTime): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReFreshPhoneCDTime;