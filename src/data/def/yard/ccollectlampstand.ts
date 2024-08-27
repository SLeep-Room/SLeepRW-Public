
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCollectLampStand {
}

class CCollectLampStand {
    static DefaultData: CCollectLampStand = {
    }

    static Unmarshal(buffer: Buffer): CCollectLampStand { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCollectLampStand.DefaultData);
    }

    static Marshal(data: CCollectLampStand): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCollectLampStand;