
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CInviteWeekShare {
}

class CInviteWeekShare {
    static DefaultData: CInviteWeekShare = {
    }

    static Unmarshal(buffer: Buffer): CInviteWeekShare { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CInviteWeekShare.DefaultData);
    }

    static Marshal(data: CInviteWeekShare): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CInviteWeekShare;