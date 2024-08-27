
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SInviteWeekShare {
}

class SInviteWeekShare {
    static DefaultData: SInviteWeekShare = {
    }

    static Unmarshal(buffer: Buffer): SInviteWeekShare { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SInviteWeekShare.DefaultData);
    }

    static Marshal(data: SInviteWeekShare): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SInviteWeekShare;