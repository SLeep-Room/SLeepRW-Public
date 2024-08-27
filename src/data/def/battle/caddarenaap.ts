
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAddArenaAP {
}

class CAddArenaAP {
    static DefaultData: CAddArenaAP = {
    }

    static Unmarshal(buffer: Buffer): CAddArenaAP { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAddArenaAP.DefaultData);
    }

    static Marshal(data: CAddArenaAP): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAddArenaAP;