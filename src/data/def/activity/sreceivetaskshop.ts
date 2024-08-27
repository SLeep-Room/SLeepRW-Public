
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveTaskShop {
	activityId : number;
	rewardID : number;
}

class SReceiveTaskShop {
    static DefaultData: SReceiveTaskShop = {
	activityId : 0,
	rewardID : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveTaskShop { 
	const reader = new BufferReader(buffer)
try{
	SReceiveTaskShop.DefaultData.activityId = reader.readInt32()
	SReceiveTaskShop.DefaultData.rewardID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveTaskShop.DefaultData);
    }

    static Marshal(data: SReceiveTaskShop): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.rewardID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveTaskShop;