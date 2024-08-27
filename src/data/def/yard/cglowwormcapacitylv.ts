
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGlowwormCapacityLv {
}

class CGlowwormCapacityLv {
    static DefaultData: CGlowwormCapacityLv = {
    }

    static Unmarshal(buffer: Buffer): CGlowwormCapacityLv { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGlowwormCapacityLv.DefaultData);
    }

    static Marshal(data: CGlowwormCapacityLv): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGlowwormCapacityLv;