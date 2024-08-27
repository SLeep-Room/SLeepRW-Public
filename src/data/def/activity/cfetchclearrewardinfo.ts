
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFetchClearRewardInfo {
	activityId : number;
}

class CFetchClearRewardInfo {
    static DefaultData: CFetchClearRewardInfo = {
	activityId : 0,
    }

    static Unmarshal(buffer: Buffer): CFetchClearRewardInfo { 
	const reader = new BufferReader(buffer)
try{
	CFetchClearRewardInfo.DefaultData.activityId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFetchClearRewardInfo.DefaultData);
    }

    static Marshal(data: CFetchClearRewardInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFetchClearRewardInfo;