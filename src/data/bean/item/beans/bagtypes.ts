
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';

interface BagTypes {
}

class BagTypes {
    static DefaultData: BagTypes = {
    }

    static Unmarshal(buffer: BufferReader): BagTypes { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BagTypes.DefaultData);
    }

    static Marshal(data: BagTypes): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}
const BagTypesEnum = {
    BAG: 1,
    EQUIPBAG: 4,
    VALUABLEBAG: 5,
    FURNITURE_BAG: 6,
}

export default BagTypesEnum;