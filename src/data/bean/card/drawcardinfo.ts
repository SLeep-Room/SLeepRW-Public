
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface DrawCardInfo {
	time : bigint;
	poolId : number;
	drawType : number;
	cardList : number[];
	cardNumList : number[];
}

class DrawCardInfo {
    static DefaultData: DrawCardInfo = {
	time : 0n,
	poolId : 0,
	drawType : 0,
	cardList : [],
	cardNumList : [],
    }

    static Unmarshal(buffer: BufferReader): DrawCardInfo { 
	const reader = buffer
try{
	DrawCardInfo.DefaultData.time = reader.readInt64()
	DrawCardInfo.DefaultData.poolId = reader.readInt32()
	DrawCardInfo.DefaultData.drawType = reader.readInt32()
	const cardListLength = reader.readCompactUInt32();

	for (let i = 0; i < cardListLength; i++) {
	    DrawCardInfo.DefaultData.cardList.push(reader.readInt32());
	}
	const cardNumListLength = reader.readCompactUInt32();

	for (let i = 0; i < cardNumListLength; i++) {
	    DrawCardInfo.DefaultData.cardNumList.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DrawCardInfo.DefaultData);
    }

    static Marshal(data: DrawCardInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.time))
	buffer.writeInt32(data.poolId)
	buffer.writeInt32(data.drawType)
	buffer.writeCompactInt32(Object.keys(data.cardList).length);
	data.cardList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.cardNumList).length);
	data.cardNumList.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DrawCardInfo;