
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CPayToBuyReturnPassLevel {
}

class CPayToBuyReturnPassLevel {
    static DefaultData: CPayToBuyReturnPassLevel = {
    }

    static Unmarshal(buffer: Buffer): CPayToBuyReturnPassLevel { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CPayToBuyReturnPassLevel.DefaultData);
    }

    static Marshal(data: CPayToBuyReturnPassLevel): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CPayToBuyReturnPassLevel;