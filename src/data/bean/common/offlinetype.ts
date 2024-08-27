
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface OfflineType {
}

class OfflineType {
    static DefaultData: OfflineType = {
    }

    static Unmarshal(buffer: BufferReader): OfflineType { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},OfflineType.DefaultData);
    }

    static Marshal(data: OfflineType): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default OfflineType;