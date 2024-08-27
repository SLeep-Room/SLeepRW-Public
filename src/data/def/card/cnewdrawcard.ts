
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CNewDrawCard {
}

class CNewDrawCard {
    static DefaultData: CNewDrawCard = {
    }

    static Unmarshal(buffer: Buffer): CNewDrawCard { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CNewDrawCard.DefaultData);
    }

    static Marshal(data: CNewDrawCard): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CNewDrawCard;