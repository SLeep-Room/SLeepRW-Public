
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDungeonClose {
}

class CDungeonClose {
    static DefaultData: CDungeonClose = {
    }

    static Unmarshal(buffer: Buffer): CDungeonClose { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDungeonClose.DefaultData);
    }

    static Marshal(data: CDungeonClose): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDungeonClose;