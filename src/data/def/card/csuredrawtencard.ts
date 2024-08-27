
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSureDrawTenCard {
}

class CSureDrawTenCard {
    static DefaultData: CSureDrawTenCard = {
    }

    static Unmarshal(buffer: Buffer): CSureDrawTenCard { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSureDrawTenCard.DefaultData);
    }

    static Marshal(data: CSureDrawTenCard): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSureDrawTenCard;