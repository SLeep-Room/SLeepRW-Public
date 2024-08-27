
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveInvitationReward {
	rewardID : number;
}

class CReceiveInvitationReward {
    static DefaultData: CReceiveInvitationReward = {
	rewardID : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveInvitationReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveInvitationReward.DefaultData.rewardID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveInvitationReward.DefaultData);
    }

    static Marshal(data: CReceiveInvitationReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveInvitationReward;