
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenBackInvite {
}

class COpenBackInvite {
    static DefaultData: COpenBackInvite = {
    }

    static Unmarshal(buffer: Buffer): COpenBackInvite { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenBackInvite.DefaultData);
    }

    static Marshal(data: COpenBackInvite): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenBackInvite;