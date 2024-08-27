
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CTotalSignAward {
}

class CTotalSignAward {
    static DefaultData: CTotalSignAward = {
    }

    static Unmarshal(buffer: Buffer): CTotalSignAward { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CTotalSignAward.DefaultData);
    }

    static Marshal(data: CTotalSignAward): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CTotalSignAward;