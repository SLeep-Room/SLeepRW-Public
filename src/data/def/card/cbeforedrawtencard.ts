
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBeforeDrawTenCard {
}

class CBeforeDrawTenCard {
    static DefaultData: CBeforeDrawTenCard = {
    }

    static Unmarshal(buffer: Buffer): CBeforeDrawTenCard { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBeforeDrawTenCard.DefaultData);
    }

    static Marshal(data: CBeforeDrawTenCard): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBeforeDrawTenCard;