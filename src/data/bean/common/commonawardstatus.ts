
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CommonAwardStatus {
}

class CommonAwardStatus {
    static DefaultData: CommonAwardStatus = {
    }

    static Unmarshal(buffer: BufferReader): CommonAwardStatus { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CommonAwardStatus.DefaultData);
    }

    static Marshal(data: CommonAwardStatus): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CommonAwardStatus;