
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface MixGoodInfo {
	goodId : number;
	sortId : number;
	goodType : number;
	diamondSum : number;
	freeDiamondSum : number;
	giftId : number;
	itemId : number[];
	itemSum : number[];
	goodRemain : number;
	moneyType : number;
	price : number;
	discount : number;
	discountPrice : number;
	pictureId : number;
	goodName : number;
	visiualEffect : number;
	condition : number;
	beginTime : bigint;
	endTime : bigint;
	optionId : number;
}

class MixGoodInfo {
    static DefaultData: MixGoodInfo = {
	goodId : 0,
	sortId : 0,
	goodType : 0,
	diamondSum : 0,
	freeDiamondSum : 0,
	giftId : 0,
	itemId : [],
	itemSum : [],
	goodRemain : 0,
	moneyType : 0,
	price : 0,
	discount : 0,
	discountPrice : 0,
	pictureId : 0,
	goodName : 0,
	visiualEffect : 0,
	condition : 0,
	beginTime : 0n,
	endTime : 0n,
	optionId : 0,
    }

    static Unmarshal(buffer: BufferReader): MixGoodInfo { 
	const reader = buffer
try{
	MixGoodInfo.DefaultData.goodId = reader.readInt32()
	MixGoodInfo.DefaultData.sortId = reader.readInt32()
	MixGoodInfo.DefaultData.goodType = reader.readInt32()
	MixGoodInfo.DefaultData.diamondSum = reader.readInt32()
	MixGoodInfo.DefaultData.freeDiamondSum = reader.readInt32()
	MixGoodInfo.DefaultData.giftId = reader.readInt32()
	const itemIdLength = reader.readCompactUInt32();

	for (let i = 0; i < itemIdLength; i++) {
	    MixGoodInfo.DefaultData.itemId.push(reader.readInt32());
	}
	const itemSumLength = reader.readCompactUInt32();

	for (let i = 0; i < itemSumLength; i++) {
	    MixGoodInfo.DefaultData.itemSum.push(reader.readInt32());
	}
	MixGoodInfo.DefaultData.goodRemain = reader.readInt32()
	MixGoodInfo.DefaultData.moneyType = reader.readInt32()
	MixGoodInfo.DefaultData.price = reader.readInt32()
	MixGoodInfo.DefaultData.discount = reader.readInt32()
	MixGoodInfo.DefaultData.discountPrice = reader.readInt32()
	MixGoodInfo.DefaultData.pictureId = reader.readInt32()
	MixGoodInfo.DefaultData.goodName = reader.readInt32()
	MixGoodInfo.DefaultData.visiualEffect = reader.readInt32()
	MixGoodInfo.DefaultData.condition = reader.readInt32()
	MixGoodInfo.DefaultData.beginTime = reader.readInt64()
	MixGoodInfo.DefaultData.endTime = reader.readInt64()
	MixGoodInfo.DefaultData.optionId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},MixGoodInfo.DefaultData);
    }

    static Marshal(data: MixGoodInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.goodId)
	buffer.writeInt32(data.sortId)
	buffer.writeInt32(data.goodType)
	buffer.writeInt32(data.diamondSum)
	buffer.writeInt32(data.freeDiamondSum)
	buffer.writeInt32(data.giftId)
	buffer.writeCompactInt32(Object.keys(data.itemId).length);
	data.itemId.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.itemSum).length);
	data.itemSum.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.goodRemain)
	buffer.writeInt32(data.moneyType)
	buffer.writeInt32(data.price)
	buffer.writeInt32(data.discount)
	buffer.writeInt32(data.discountPrice)
	buffer.writeInt32(data.pictureId)
	buffer.writeInt32(data.goodName)
	buffer.writeInt32(data.visiualEffect)
	buffer.writeInt32(data.condition)
	buffer.writeInt64(BigInt(data.beginTime))
	buffer.writeInt64(BigInt(data.endTime))
	buffer.writeInt32(data.optionId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default MixGoodInfo;