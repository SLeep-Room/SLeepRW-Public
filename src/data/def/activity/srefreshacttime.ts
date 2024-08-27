
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshActTime {
	activityId : number;
	leftTime : bigint;
}

class SRefreshActTime {
    static DefaultData: SRefreshActTime = {
	activityId : 0,
	leftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SRefreshActTime { 
	const reader = new BufferReader(buffer)
try{
	SRefreshActTime.DefaultData.activityId = reader.readInt32()
	SRefreshActTime.DefaultData.leftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshActTime.DefaultData);
    }

    static Marshal(data: SRefreshActTime): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt64(BigInt(data.leftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshActTime;