
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface GoodInfo {
	goodId : number;
	chargeId : number;
	itemId : number[];
	itemNum : number[];
	moneyType : number;
	price : number;
	goodStatus : number;
	correspondGift : number;
}

class GoodInfo {
    static DefaultData: GoodInfo = {
	goodId : 0,
	chargeId : 0,
	itemId : [],
	itemNum : [],
	moneyType : 0,
	price : 0,
	goodStatus : 0,
	correspondGift : 0,
    }

    static Unmarshal(buffer: BufferReader): GoodInfo { 
	const reader = buffer
try{
	GoodInfo.DefaultData.goodId = reader.readInt32()
	GoodInfo.DefaultData.chargeId = reader.readInt32()
	const itemIdLength = reader.readCompactUInt32();

	for (let i = 0; i < itemIdLength; i++) {
	    GoodInfo.DefaultData.itemId.push(reader.readInt32());
	}
	const itemNumLength = reader.readCompactUInt32();

	for (let i = 0; i < itemNumLength; i++) {
	    GoodInfo.DefaultData.itemNum.push(reader.readInt32());
	}
	GoodInfo.DefaultData.moneyType = reader.readInt32()
	GoodInfo.DefaultData.price = reader.readInt32()
	GoodInfo.DefaultData.goodStatus = reader.readInt32()
	GoodInfo.DefaultData.correspondGift = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},GoodInfo.DefaultData);
    }

    static Marshal(data: GoodInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.goodId)
	buffer.writeInt32(data.chargeId)
	buffer.writeCompactInt32(Object.keys(data.itemId).length);
	data.itemId.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.itemNum).length);
	data.itemNum.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.moneyType)
	buffer.writeInt32(data.price)
	buffer.writeInt32(data.goodStatus)
	buffer.writeInt32(data.correspondGift)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default GoodInfo;