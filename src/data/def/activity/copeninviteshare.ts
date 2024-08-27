
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenInviteShare {
}

class COpenInviteShare {
    static DefaultData: COpenInviteShare = {
    }

    static Unmarshal(buffer: Buffer): COpenInviteShare { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenInviteShare.DefaultData);
    }

    static Marshal(data: COpenInviteShare): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenInviteShare;