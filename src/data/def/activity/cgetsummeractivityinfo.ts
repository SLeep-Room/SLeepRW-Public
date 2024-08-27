
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetSummerActivityInfo {
}

class CGetSummerActivityInfo {
    static DefaultData: CGetSummerActivityInfo = {
    }

    static Unmarshal(buffer: Buffer): CGetSummerActivityInfo { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetSummerActivityInfo.DefaultData);
    }

    static Marshal(data: CGetSummerActivityInfo): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetSummerActivityInfo;