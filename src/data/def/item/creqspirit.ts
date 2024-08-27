
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReqSpirit {
}

class CReqSpirit {
    static DefaultData: CReqSpirit = {
    }

    static Unmarshal(buffer: Buffer): CReqSpirit { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReqSpirit.DefaultData);
    }

    static Marshal(data: CReqSpirit): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReqSpirit;