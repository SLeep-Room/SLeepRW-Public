
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenTowerList {
}

class COpenTowerList {
    static DefaultData: COpenTowerList = {
    }

    static Unmarshal(buffer: Buffer): COpenTowerList { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenTowerList.DefaultData);
    }

    static Marshal(data: COpenTowerList): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenTowerList;