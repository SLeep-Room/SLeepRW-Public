
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetTowerFloorInfo {
}

class CGetTowerFloorInfo {
    static DefaultData: CGetTowerFloorInfo = {
    }

    static Unmarshal(buffer: Buffer): CGetTowerFloorInfo { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetTowerFloorInfo.DefaultData);
    }

    static Marshal(data: CGetTowerFloorInfo): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetTowerFloorInfo;