
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveAllPointsAward {
	activityID : number;
}

class CReceiveAllPointsAward {
    static DefaultData: CReceiveAllPointsAward = {
	activityID : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveAllPointsAward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveAllPointsAward.DefaultData.activityID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveAllPointsAward.DefaultData);
    }

    static Marshal(data: CReceiveAllPointsAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveAllPointsAward;