
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SDialogueBuy {
}

class SDialogueBuy {
    static DefaultData: SDialogueBuy = {
    }

    static Unmarshal(buffer: Buffer): SDialogueBuy { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDialogueBuy.DefaultData);
    }

    static Marshal(data: SDialogueBuy): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDialogueBuy;