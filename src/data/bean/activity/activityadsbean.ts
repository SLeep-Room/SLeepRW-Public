
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ActivityAdsBean {
	id : number;
	leftActiveTime : bigint;
	ifJumpActive : number;
	leftStartTime : bigint;
}

class ActivityAdsBean {
    static DefaultData: ActivityAdsBean = {
	id : 0,
	leftActiveTime : 0n,
	ifJumpActive : 0,
	leftStartTime : 0n,
    }

    static Unmarshal(buffer: BufferReader): ActivityAdsBean { 
	const reader = buffer
try{
	ActivityAdsBean.DefaultData.id = reader.readInt32()
	ActivityAdsBean.DefaultData.leftActiveTime = reader.readInt64()
	ActivityAdsBean.DefaultData.ifJumpActive = reader.readInt32()
	ActivityAdsBean.DefaultData.leftStartTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ActivityAdsBean.DefaultData);
    }

    static Marshal(data: ActivityAdsBean): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt64(BigInt(data.leftActiveTime))
	buffer.writeInt32(data.ifJumpActive)
	buffer.writeInt64(BigInt(data.leftStartTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ActivityAdsBean;