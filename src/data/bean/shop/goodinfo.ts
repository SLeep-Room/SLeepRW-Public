
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface GoodInfo {
	goodId : number;
	sortId : number;
	itemId : number;
	itemSum : number;
	goodRemain : number;
	maxRemain : number;
	moneyType : number;
	price : number;
	discount : number;
	discountPrice : number;
	beginTime : bigint;
	endTime : bigint;
	status : number;
}

class GoodInfo {
    static DefaultData: GoodInfo = {
	goodId : 0,
	sortId : 0,
	itemId : 0,
	itemSum : 0,
	goodRemain : 0,
	maxRemain : 0,
	moneyType : 0,
	price : 0,
	discount : 0,
	discountPrice : 0,
	beginTime : 0n,
	endTime : 0n,
	status : 0,
    }

    static Unmarshal(buffer: BufferReader): GoodInfo { 
	const reader = buffer
try{
	GoodInfo.DefaultData.goodId = reader.readInt32()
	GoodInfo.DefaultData.sortId = reader.readInt32()
	GoodInfo.DefaultData.itemId = reader.readInt32()
	GoodInfo.DefaultData.itemSum = reader.readInt32()
	GoodInfo.DefaultData.goodRemain = reader.readInt32()
	GoodInfo.DefaultData.maxRemain = reader.readInt32()
	GoodInfo.DefaultData.moneyType = reader.readInt32()
	GoodInfo.DefaultData.price = reader.readInt32()
	GoodInfo.DefaultData.discount = reader.readInt32()
	GoodInfo.DefaultData.discountPrice = reader.readInt32()
	GoodInfo.DefaultData.beginTime = reader.readInt64()
	GoodInfo.DefaultData.endTime = reader.readInt64()
	GoodInfo.DefaultData.status = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},GoodInfo.DefaultData);
    }

    static Marshal(data: GoodInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.goodId)
	buffer.writeInt32(data.sortId)
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.itemSum)
	buffer.writeInt32(data.goodRemain)
	buffer.writeInt32(data.maxRemain)
	buffer.writeInt32(data.moneyType)
	buffer.writeInt32(data.price)
	buffer.writeInt32(data.discount)
	buffer.writeInt32(data.discountPrice)
	buffer.writeInt64(BigInt(data.beginTime))
	buffer.writeInt64(BigInt(data.endTime))
	buffer.writeInt32(data.status)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default GoodInfo;