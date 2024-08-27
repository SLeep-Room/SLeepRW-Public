
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenDrawCardLog {
}

class COpenDrawCardLog {
    static DefaultData: COpenDrawCardLog = {
    }

    static Unmarshal(buffer: Buffer): COpenDrawCardLog { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenDrawCardLog.DefaultData);
    }

    static Marshal(data: COpenDrawCardLog): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenDrawCardLog;