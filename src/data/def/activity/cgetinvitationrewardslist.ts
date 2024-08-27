
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetInvitationRewardsList {
}

class CGetInvitationRewardsList {
    static DefaultData: CGetInvitationRewardsList = {
    }

    static Unmarshal(buffer: Buffer): CGetInvitationRewardsList { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetInvitationRewardsList.DefaultData);
    }

    static Marshal(data: CGetInvitationRewardsList): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetInvitationRewardsList;