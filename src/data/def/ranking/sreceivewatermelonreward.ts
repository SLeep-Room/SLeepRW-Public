
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SReceiveWatermelonReward {
	id : number;
	items : typeof items.DefaultData[];
}

class SReceiveWatermelonReward {
    static DefaultData: SReceiveWatermelonReward = {
	id : 0,
	items : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveWatermelonReward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveWatermelonReward.DefaultData.id = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SReceiveWatermelonReward.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveWatermelonReward.DefaultData);
    }

    static Marshal(data: SReceiveWatermelonReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveWatermelonReward;