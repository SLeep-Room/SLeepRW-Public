
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceivePointsAward {
	activityID : number;
	taskID : number;
}

class CReceivePointsAward {
    static DefaultData: CReceivePointsAward = {
	activityID : 0,
	taskID : 0,
    }

    static Unmarshal(buffer: Buffer): CReceivePointsAward { 
	const reader = new BufferReader(buffer)
try{
	CReceivePointsAward.DefaultData.activityID = reader.readInt32()
	CReceivePointsAward.DefaultData.taskID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceivePointsAward.DefaultData);
    }

    static Marshal(data: CReceivePointsAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeInt32(data.taskID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceivePointsAward;