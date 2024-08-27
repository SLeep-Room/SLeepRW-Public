
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSpringSpirit {
}

class CSpringSpirit {
    static DefaultData: CSpringSpirit = {
    }

    static Unmarshal(buffer: Buffer): CSpringSpirit { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSpringSpirit.DefaultData);
    }

    static Marshal(data: CSpringSpirit): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSpringSpirit;