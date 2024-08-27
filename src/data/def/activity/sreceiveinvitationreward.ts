
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import nextReward from '../../bean/activity/inviteaward';

interface SReceiveInvitationReward {
	rewardID : number;
	nextReward : typeof nextReward.DefaultData;
	result : number;
}

class SReceiveInvitationReward {
    static DefaultData: SReceiveInvitationReward = {
	rewardID : 0,
	nextReward : nextReward.DefaultData,
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveInvitationReward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveInvitationReward.DefaultData.rewardID = reader.readInt32()
	SReceiveInvitationReward.DefaultData.nextReward = nextReward.Unmarshal(reader)
	SReceiveInvitationReward.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveInvitationReward.DefaultData);
    }

    static Marshal(data: SReceiveInvitationReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardID)
	buffer.writeBuffer(nextReward.Marshal(data.nextReward))
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveInvitationReward;