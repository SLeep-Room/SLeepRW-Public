
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRandomName {
}

class CRandomName {
    static DefaultData: CRandomName = {
    }

    static Unmarshal(buffer: Buffer): CRandomName { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRandomName.DefaultData);
    }

    static Marshal(data: CRandomName): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRandomName;