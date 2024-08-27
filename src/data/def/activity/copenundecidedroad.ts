
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenUndecidedRoad {
}

class COpenUndecidedRoad {
    static DefaultData: COpenUndecidedRoad = {
    }

    static Unmarshal(buffer: Buffer): COpenUndecidedRoad { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenUndecidedRoad.DefaultData);
    }

    static Marshal(data: COpenUndecidedRoad): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenUndecidedRoad;