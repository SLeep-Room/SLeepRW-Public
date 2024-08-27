
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SystemType {
}

class SystemType {
    static DefaultData: SystemType = {
    }

    static Unmarshal(buffer: BufferReader): SystemType { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SystemType.DefaultData);
    }

    static Marshal(data: SystemType): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SystemType;