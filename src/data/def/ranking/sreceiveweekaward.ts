
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SReceiveWeekAward {
	id : number;
	stageId : number;
	items : typeof items.DefaultData[];
}

class SReceiveWeekAward {
    static DefaultData: SReceiveWeekAward = {
	id : 0,
	stageId : 0,
	items : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveWeekAward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveWeekAward.DefaultData.id = reader.readInt32()
	SReceiveWeekAward.DefaultData.stageId = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SReceiveWeekAward.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveWeekAward.DefaultData);
    }

    static Marshal(data: SReceiveWeekAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.stageId)
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveWeekAward;