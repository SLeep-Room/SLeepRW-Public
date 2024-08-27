
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ShopInfo {
	shopId : number;
	shopType : number;
	moneyType : string;
	openType : number;
	openTime : bigint;
	closeTime : bigint;
	closeTimeShow : bigint;
}

class ShopInfo {
    static DefaultData: ShopInfo = {
	shopId : 0,
	shopType : 0,
	moneyType : "",
	openType : 0,
	openTime : 0n,
	closeTime : 0n,
	closeTimeShow : 0n,
    }

    static Unmarshal(buffer: BufferReader): ShopInfo { 
	const reader = buffer
try{
	ShopInfo.DefaultData.shopId = reader.readInt32()
	ShopInfo.DefaultData.shopType = reader.readInt32()
	ShopInfo.DefaultData.moneyType = reader.readString()
	ShopInfo.DefaultData.openType = reader.readInt32()
	ShopInfo.DefaultData.openTime = reader.readInt64()
	ShopInfo.DefaultData.closeTime = reader.readInt64()
	ShopInfo.DefaultData.closeTimeShow = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ShopInfo.DefaultData);
    }

    static Marshal(data: ShopInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shopId)
	buffer.writeInt32(data.shopType)
	buffer.writeString(data.moneyType)
	buffer.writeInt32(data.openType)
	buffer.writeInt64(BigInt(data.openTime))
	buffer.writeInt64(BigInt(data.closeTime))
	buffer.writeInt64(BigInt(data.closeTimeShow))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ShopInfo;