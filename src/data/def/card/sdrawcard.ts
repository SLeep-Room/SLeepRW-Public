
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import cards from '../../bean/card/cardinfo';
import items from '../../bean/item/beans/iteminfo';

interface SDrawCard {
	cards : typeof cards.DefaultData[];
	items : typeof items.DefaultData[];
	baodiNum : number;
	drawCardType : number;
	share : number;
	curDayTimes : number;
}

class SDrawCard {
    static DefaultData: SDrawCard = {
	cards : [],
	items : [],
	baodiNum : 0,
	drawCardType : 0,
	share : 0,
	curDayTimes : 0,
    }

    static Unmarshal(buffer: Buffer): SDrawCard { 
	const reader = new BufferReader(buffer)
try{
	const cardsLength = reader.readCompactUInt32();

	for (let i = 0; i < cardsLength; i++) {
	    SDrawCard.DefaultData.cards.push(cards.Unmarshal(reader));
	}
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SDrawCard.DefaultData.items.push(items.Unmarshal(reader));
	}
	SDrawCard.DefaultData.baodiNum = reader.readInt32()
	SDrawCard.DefaultData.drawCardType = reader.readInt32()
	SDrawCard.DefaultData.share = reader.readInt32()
	SDrawCard.DefaultData.curDayTimes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDrawCard.DefaultData);
    }

    static Marshal(data: SDrawCard): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.cards).length);
	data.cards.forEach((value) => {
		buffer.writeBuffer(cards.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});
	buffer.writeInt32(data.baodiNum)
	buffer.writeInt32(data.drawCardType)
	buffer.writeInt32(data.share)
	buffer.writeInt32(data.curDayTimes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDrawCard;