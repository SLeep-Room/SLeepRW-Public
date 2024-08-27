
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeSummerActivityTime {
}

class CChangeSummerActivityTime {
    static DefaultData: CChangeSummerActivityTime = {
    }

    static Unmarshal(buffer: Buffer): CChangeSummerActivityTime { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeSummerActivityTime.DefaultData);
    }

    static Marshal(data: CChangeSummerActivityTime): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeSummerActivityTime;