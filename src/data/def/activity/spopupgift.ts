
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SPopUpGift {
	activityID : number;
	leftTime : bigint;
	goodsId : number;
	moneyType : number;
	price : number;
}

class SPopUpGift {
    static DefaultData: SPopUpGift = {
	activityID : 0,
	leftTime : 0n,
	goodsId : 0,
	moneyType : 0,
	price : 0,
    }

    static Unmarshal(buffer: Buffer): SPopUpGift { 
	const reader = new BufferReader(buffer)
try{
	SPopUpGift.DefaultData.activityID = reader.readInt32()
	SPopUpGift.DefaultData.leftTime = reader.readInt64()
	SPopUpGift.DefaultData.goodsId = reader.readInt32()
	SPopUpGift.DefaultData.moneyType = reader.readInt32()
	SPopUpGift.DefaultData.price = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SPopUpGift.DefaultData);
    }

    static Marshal(data: SPopUpGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt32(data.goodsId)
	buffer.writeInt32(data.moneyType)
	buffer.writeInt32(data.price)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SPopUpGift;