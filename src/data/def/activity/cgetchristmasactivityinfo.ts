
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetChristmasActivityInfo {
}

class CGetChristmasActivityInfo {
    static DefaultData: CGetChristmasActivityInfo = {
    }

    static Unmarshal(buffer: Buffer): CGetChristmasActivityInfo { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetChristmasActivityInfo.DefaultData);
    }

    static Marshal(data: CGetChristmasActivityInfo): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetChristmasActivityInfo;