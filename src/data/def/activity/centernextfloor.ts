
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CEnterNextFloor {
}

class CEnterNextFloor {
    static DefaultData: CEnterNextFloor = {
    }

    static Unmarshal(buffer: Buffer): CEnterNextFloor { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CEnterNextFloor.DefaultData);
    }

    static Marshal(data: CEnterNextFloor): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CEnterNextFloor;