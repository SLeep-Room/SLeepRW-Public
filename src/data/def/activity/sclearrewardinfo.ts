
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SClearRewardInfo {
	activityId : number;
	status : number;
	leftTime : bigint;
}

class SClearRewardInfo {
    static DefaultData: SClearRewardInfo = {
	activityId : 0,
	status : 0,
	leftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SClearRewardInfo { 
	const reader = new BufferReader(buffer)
try{
	SClearRewardInfo.DefaultData.activityId = reader.readInt32()
	SClearRewardInfo.DefaultData.status = reader.readInt32()
	SClearRewardInfo.DefaultData.leftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SClearRewardInfo.DefaultData);
    }

    static Marshal(data: SClearRewardInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.status)
	buffer.writeInt64(BigInt(data.leftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SClearRewardInfo;