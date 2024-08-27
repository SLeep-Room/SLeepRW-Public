
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CQueryAnniversaryShareInfo {
}

class CQueryAnniversaryShareInfo {
    static DefaultData: CQueryAnniversaryShareInfo = {
    }

    static Unmarshal(buffer: Buffer): CQueryAnniversaryShareInfo { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CQueryAnniversaryShareInfo.DefaultData);
    }

    static Marshal(data: CQueryAnniversaryShareInfo): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CQueryAnniversaryShareInfo;