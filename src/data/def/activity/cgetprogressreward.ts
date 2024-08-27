
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetProgressReward {
	activityId : number;
	boxId : number;
}

class CGetProgressReward {
    static DefaultData: CGetProgressReward = {
	activityId : 0,
	boxId : 0,
    }

    static Unmarshal(buffer: Buffer): CGetProgressReward { 
	const reader = new BufferReader(buffer)
try{
	CGetProgressReward.DefaultData.activityId = reader.readInt32()
	CGetProgressReward.DefaultData.boxId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetProgressReward.DefaultData);
    }

    static Marshal(data: CGetProgressReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.boxId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetProgressReward;