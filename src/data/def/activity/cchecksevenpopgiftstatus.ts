
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckSevenPopGiftStatus {
}

class CCheckSevenPopGiftStatus {
    static DefaultData: CCheckSevenPopGiftStatus = {
    }

    static Unmarshal(buffer: Buffer): CCheckSevenPopGiftStatus { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckSevenPopGiftStatus.DefaultData);
    }

    static Marshal(data: CCheckSevenPopGiftStatus): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckSevenPopGiftStatus;