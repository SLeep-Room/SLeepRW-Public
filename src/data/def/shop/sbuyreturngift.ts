
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBuyReturnGift {
	giftID : number;
	result : number;
}

class SBuyReturnGift {
    static DefaultData: SBuyReturnGift = {
	giftID : 0,
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SBuyReturnGift { 
	const reader = new BufferReader(buffer)
try{
	SBuyReturnGift.DefaultData.giftID = reader.readInt32()
	SBuyReturnGift.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBuyReturnGift.DefaultData);
    }

    static Marshal(data: SBuyReturnGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.giftID)
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBuyReturnGift;