
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import goodInfo from '../../bean/activity/goodinfo';

interface SRefreshReward {
	activityID : number;
	leftTime : bigint;
	goodInfo : typeof goodInfo.DefaultData;
}

class SRefreshReward {
    static DefaultData: SRefreshReward = {
	activityID : 0,
	leftTime : 0n,
	goodInfo : goodInfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshReward { 
	const reader = new BufferReader(buffer)
try{
	SRefreshReward.DefaultData.activityID = reader.readInt32()
	SRefreshReward.DefaultData.leftTime = reader.readInt64()
	SRefreshReward.DefaultData.goodInfo = goodInfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshReward.DefaultData);
    }

    static Marshal(data: SRefreshReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeBuffer(goodInfo.Marshal(data.goodInfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshReward;