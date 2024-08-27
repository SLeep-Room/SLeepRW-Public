
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface InviteAward {
	rewardID : number;
	rewardState : number;
	progress : number;
}

class InviteAward {
    static DefaultData: InviteAward = {
	rewardID : 0,
	rewardState : 0,
	progress : 0,
    }

    static Unmarshal(buffer: BufferReader): InviteAward { 
	const reader = buffer
try{
	InviteAward.DefaultData.rewardID = reader.readInt32()
	InviteAward.DefaultData.rewardState = reader.readInt32()
	InviteAward.DefaultData.progress = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},InviteAward.DefaultData);
    }

    static Marshal(data: InviteAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardID)
	buffer.writeInt32(data.rewardState)
	buffer.writeInt32(data.progress)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default InviteAward;