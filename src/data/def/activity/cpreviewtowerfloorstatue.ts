
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CPreviewTowerFloorStatue {
}

class CPreviewTowerFloorStatue {
    static DefaultData: CPreviewTowerFloorStatue = {
    }

    static Unmarshal(buffer: Buffer): CPreviewTowerFloorStatue { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CPreviewTowerFloorStatue.DefaultData);
    }

    static Marshal(data: CPreviewTowerFloorStatue): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CPreviewTowerFloorStatue;