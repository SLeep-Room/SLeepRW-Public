
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFinishTowerMap {
}

class CFinishTowerMap {
    static DefaultData: CFinishTowerMap = {
    }

    static Unmarshal(buffer: Buffer): CFinishTowerMap { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFinishTowerMap.DefaultData);
    }

    static Marshal(data: CFinishTowerMap): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFinishTowerMap;