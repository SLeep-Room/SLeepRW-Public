
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetLoverActivityInfo {
}

class CGetLoverActivityInfo {
    static DefaultData: CGetLoverActivityInfo = {
    }

    static Unmarshal(buffer: Buffer): CGetLoverActivityInfo { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetLoverActivityInfo.DefaultData);
    }

    static Marshal(data: CGetLoverActivityInfo): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetLoverActivityInfo;