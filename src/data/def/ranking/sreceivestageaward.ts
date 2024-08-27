
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SReceiveStageAward {
	id : number;
	stageId : number;
	items : typeof items.DefaultData[];
}

class SReceiveStageAward {
    static DefaultData: SReceiveStageAward = {
	id : 0,
	stageId : 0,
	items : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveStageAward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveStageAward.DefaultData.id = reader.readInt32()
	SReceiveStageAward.DefaultData.stageId = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SReceiveStageAward.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveStageAward.DefaultData);
    }

    static Marshal(data: SReceiveStageAward): Buffer { 
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


export default SReceiveStageAward;