
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBuyDailyGift {
	giftID : number;
}

class CBuyDailyGift {
    static DefaultData: CBuyDailyGift = {
	giftID : 0,
    }

    static Unmarshal(buffer: Buffer): CBuyDailyGift { 
	const reader = new BufferReader(buffer)
try{
	CBuyDailyGift.DefaultData.giftID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBuyDailyGift.DefaultData);
    }

    static Marshal(data: CBuyDailyGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.giftID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBuyDailyGift;