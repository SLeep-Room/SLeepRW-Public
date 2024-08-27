
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import rewardsList from '../../bean/activity/inviteaward';

interface SGetInvitationRewardsList {
	rewardsList : typeof rewardsList.DefaultData[];
}

class SGetInvitationRewardsList {
    static DefaultData: SGetInvitationRewardsList = {
	rewardsList : [],
    }

    static Unmarshal(buffer: Buffer): SGetInvitationRewardsList { 
	const reader = new BufferReader(buffer)
try{
	const rewardsListLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardsListLength; i++) {
	    SGetInvitationRewardsList.DefaultData.rewardsList.push(rewardsList.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetInvitationRewardsList.DefaultData);
    }

    static Marshal(data: SGetInvitationRewardsList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.rewardsList).length);
	data.rewardsList.forEach((value) => {
		buffer.writeBuffer(rewardsList.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetInvitationRewardsList;