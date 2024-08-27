
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetPopTipsReward {
	activityID : number;
}

class CGetPopTipsReward {
    static DefaultData: CGetPopTipsReward = {
	activityID : 0,
    }

    static Unmarshal(buffer: Buffer): CGetPopTipsReward { 
	const reader = new BufferReader(buffer)
try{
	CGetPopTipsReward.DefaultData.activityID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetPopTipsReward.DefaultData);
    }

    static Marshal(data: CGetPopTipsReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetPopTipsReward;