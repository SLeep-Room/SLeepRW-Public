
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetSummerEchoInfo {
}

class CGetSummerEchoInfo {
    static DefaultData: CGetSummerEchoInfo = {
    }

    static Unmarshal(buffer: Buffer): CGetSummerEchoInfo { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetSummerEchoInfo.DefaultData);
    }

    static Marshal(data: CGetSummerEchoInfo): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetSummerEchoInfo;