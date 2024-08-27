
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenInviteeList {
}

class COpenInviteeList {
    static DefaultData: COpenInviteeList = {
    }

    static Unmarshal(buffer: Buffer): COpenInviteeList { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenInviteeList.DefaultData);
    }

    static Marshal(data: COpenInviteeList): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenInviteeList;