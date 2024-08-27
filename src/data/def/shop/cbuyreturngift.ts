
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBuyReturnGift {
	giftID : number;
	giftType : number;
}

class CBuyReturnGift {
    static DefaultData: CBuyReturnGift = {
	giftID : 0,
	giftType : 0,
    }

    static Unmarshal(buffer: Buffer): CBuyReturnGift { 
	const reader = new BufferReader(buffer)
try{
	CBuyReturnGift.DefaultData.giftID = reader.readInt32()
	CBuyReturnGift.DefaultData.giftType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBuyReturnGift.DefaultData);
    }

    static Marshal(data: CBuyReturnGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.giftID)
	buffer.writeInt32(data.giftType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBuyReturnGift;