
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import itemInfo from '../../bean/item/beans/iteminfo';

interface SOpenDoubleElevenCard {
	poolId : number;
	position : number;
	cardType : number;
	itemInfo : typeof itemInfo.DefaultData;
}

class SOpenDoubleElevenCard {
    static DefaultData: SOpenDoubleElevenCard = {
	poolId : 0,
	position : 0,
	cardType : 0,
	itemInfo : itemInfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SOpenDoubleElevenCard { 
	const reader = new BufferReader(buffer)
try{
	SOpenDoubleElevenCard.DefaultData.poolId = reader.readInt32()
	SOpenDoubleElevenCard.DefaultData.position = reader.readInt32()
	SOpenDoubleElevenCard.DefaultData.cardType = reader.readInt32()
	SOpenDoubleElevenCard.DefaultData.itemInfo = itemInfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenDoubleElevenCard.DefaultData);
    }

    static Marshal(data: SOpenDoubleElevenCard): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.poolId)
	buffer.writeInt32(data.position)
	buffer.writeInt32(data.cardType)
	buffer.writeBuffer(itemInfo.Marshal(data.itemInfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenDoubleElevenCard;