
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CShareDrawCard {
}

class CShareDrawCard {
    static DefaultData: CShareDrawCard = {
    }

    static Unmarshal(buffer: Buffer): CShareDrawCard { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CShareDrawCard.DefaultData);
    }

    static Marshal(data: CShareDrawCard): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CShareDrawCard;