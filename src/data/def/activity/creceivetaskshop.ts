
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveTaskShop {
	activityId : number;
	rewardID : number;
}

class CReceiveTaskShop {
    static DefaultData: CReceiveTaskShop = {
	activityId : 0,
	rewardID : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveTaskShop { 
	const reader = new BufferReader(buffer)
try{
	CReceiveTaskShop.DefaultData.activityId = reader.readInt32()
	CReceiveTaskShop.DefaultData.rewardID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveTaskShop.DefaultData);
    }

    static Marshal(data: CReceiveTaskShop): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.rewardID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveTaskShop;