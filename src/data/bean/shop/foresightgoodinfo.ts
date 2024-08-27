
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ForesightGoodInfo {
	goodId : number;
	itemId : number[];
	itemSum : number[];
	moneyType : number;
	price : number;
	pictureId : number;
	goodName : number;
}

class ForesightGoodInfo {
    static DefaultData: ForesightGoodInfo = {
	goodId : 0,
	itemId : [],
	itemSum : [],
	moneyType : 0,
	price : 0,
	pictureId : 0,
	goodName : 0,
    }

    static Unmarshal(buffer: BufferReader): ForesightGoodInfo { 
	const reader = buffer
try{
	ForesightGoodInfo.DefaultData.goodId = reader.readInt32()
	const itemIdLength = reader.readCompactUInt32();

	for (let i = 0; i < itemIdLength; i++) {
	    ForesightGoodInfo.DefaultData.itemId.push(reader.readInt32());
	}
	const itemSumLength = reader.readCompactUInt32();

	for (let i = 0; i < itemSumLength; i++) {
	    ForesightGoodInfo.DefaultData.itemSum.push(reader.readInt32());
	}
	ForesightGoodInfo.DefaultData.moneyType = reader.readInt32()
	ForesightGoodInfo.DefaultData.price = reader.readInt32()
	ForesightGoodInfo.DefaultData.pictureId = reader.readInt32()
	ForesightGoodInfo.DefaultData.goodName = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ForesightGoodInfo.DefaultData);
    }

    static Marshal(data: ForesightGoodInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.goodId)
	buffer.writeCompactInt32(Object.keys(data.itemId).length);
	data.itemId.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.itemSum).length);
	data.itemSum.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.moneyType)
	buffer.writeInt32(data.price)
	buffer.writeInt32(data.pictureId)
	buffer.writeInt32(data.goodName)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ForesightGoodInfo;