
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckClearRewardEnd {
	activityId : number;
}

class CCheckClearRewardEnd {
    static DefaultData: CCheckClearRewardEnd = {
	activityId : 0,
    }

    static Unmarshal(buffer: Buffer): CCheckClearRewardEnd { 
	const reader = new BufferReader(buffer)
try{
	CCheckClearRewardEnd.DefaultData.activityId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckClearRewardEnd.DefaultData);
    }

    static Marshal(data: CCheckClearRewardEnd): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckClearRewardEnd;