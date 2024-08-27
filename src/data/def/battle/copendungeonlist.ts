
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenDungeonList {
}

class COpenDungeonList {
    static DefaultData: COpenDungeonList = {
    }

    static Unmarshal(buffer: Buffer): COpenDungeonList { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenDungeonList.DefaultData);
    }

    static Marshal(data: COpenDungeonList): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenDungeonList;