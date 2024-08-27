
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import item from '../../bean/item/beans/iteminfo';

interface CardInfo {
	cardtype : number;
	cardId : number;
	item : typeof item.DefaultData;
	isNew : number;
}

class CardInfo {
    static DefaultData: CardInfo = {
	cardtype : 0,
	cardId : 0,
	item : item.DefaultData,
	isNew : 0,
    }

    static Unmarshal(buffer: BufferReader): CardInfo { 
	const reader = buffer
try{
	CardInfo.DefaultData.cardtype = reader.readInt32()
	CardInfo.DefaultData.cardId = reader.readInt32()
	CardInfo.DefaultData.item = item.Unmarshal(reader)
	CardInfo.DefaultData.isNew = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CardInfo.DefaultData);
    }

    static Marshal(data: CardInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.cardtype)
	buffer.writeInt32(data.cardId)
	buffer.writeBuffer(item.Marshal(data.item))
	buffer.writeInt32(data.isNew)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CardInfo;