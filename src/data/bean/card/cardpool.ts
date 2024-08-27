
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import drawCardDetails from '../../bean/card/drawcarddetails';

interface CardPool {
	itemid : number;
	itemnum : number;
	itemidTen : number;
	itemnumTen : number;
	chargeItemNumTen : number;
	chargeItemIdTen : number;
	moneyId : number;
	moneyNum : number;
	moneyIdTen : number;
	moneyNumTen : number;
	drawCardDetails : typeof drawCardDetails.DefaultData;
	baoDiNums : number;
	upBaoDiNums : number;
	display : number;
}

class CardPool {
    static DefaultData: CardPool = {
	itemid : 0,
	itemnum : 0,
	itemidTen : 0,
	itemnumTen : 0,
	chargeItemNumTen : 0,
	chargeItemIdTen : 0,
	moneyId : 0,
	moneyNum : 0,
	moneyIdTen : 0,
	moneyNumTen : 0,
	drawCardDetails : drawCardDetails.DefaultData,
	baoDiNums : 0,
	upBaoDiNums : 0,
	display : 0,
    }

    static Unmarshal(buffer: BufferReader): CardPool { 
	const reader = buffer
try{
	CardPool.DefaultData.itemid = reader.readInt32()
	CardPool.DefaultData.itemnum = reader.readInt32()
	CardPool.DefaultData.itemidTen = reader.readInt32()
	CardPool.DefaultData.itemnumTen = reader.readInt32()
	CardPool.DefaultData.chargeItemNumTen = reader.readInt32()
	CardPool.DefaultData.chargeItemIdTen = reader.readInt32()
	CardPool.DefaultData.moneyId = reader.readInt32()
	CardPool.DefaultData.moneyNum = reader.readInt32()
	CardPool.DefaultData.moneyIdTen = reader.readInt32()
	CardPool.DefaultData.moneyNumTen = reader.readInt32()
	CardPool.DefaultData.drawCardDetails = drawCardDetails.Unmarshal(reader)
	CardPool.DefaultData.baoDiNums = reader.readInt32()
	CardPool.DefaultData.upBaoDiNums = reader.readInt32()
	CardPool.DefaultData.display = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CardPool.DefaultData);
    }

    static Marshal(data: CardPool): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemid)
	buffer.writeInt32(data.itemnum)
	buffer.writeInt32(data.itemidTen)
	buffer.writeInt32(data.itemnumTen)
	buffer.writeInt32(data.chargeItemNumTen)
	buffer.writeInt32(data.chargeItemIdTen)
	buffer.writeInt32(data.moneyId)
	buffer.writeInt32(data.moneyNum)
	buffer.writeInt32(data.moneyIdTen)
	buffer.writeInt32(data.moneyNumTen)
	buffer.writeBuffer(drawCardDetails.Marshal(data.drawCardDetails))
	buffer.writeInt32(data.baoDiNums)
	buffer.writeInt32(data.upBaoDiNums)
	buffer.writeInt32(data.display)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CardPool;