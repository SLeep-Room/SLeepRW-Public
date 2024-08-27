
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBuyForesightGift {
	activityId : number;
	goodId : number;
}

class CBuyForesightGift {
    static DefaultData: CBuyForesightGift = {
	activityId : 0,
	goodId : 0,
    }

    static Unmarshal(buffer: Buffer): CBuyForesightGift { 
	const reader = new BufferReader(buffer)
try{
	CBuyForesightGift.DefaultData.activityId = reader.readInt32()
	CBuyForesightGift.DefaultData.goodId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBuyForesightGift.DefaultData);
    }

    static Marshal(data: CBuyForesightGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.goodId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBuyForesightGift;