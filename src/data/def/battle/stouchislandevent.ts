
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import awardItems from '../../bean/item/beans/iteminfo';

interface STouchIslandEvent {
	islandId : number;
	result : number;
	awardItems : typeof awardItems.DefaultData[];
}

class STouchIslandEvent {
    static DefaultData: STouchIslandEvent = {
	islandId : 0,
	result : 0,
	awardItems : [],
    }

    static Unmarshal(buffer: Buffer): STouchIslandEvent { 
	const reader = new BufferReader(buffer)
try{
	STouchIslandEvent.DefaultData.islandId = reader.readInt32()
	STouchIslandEvent.DefaultData.result = reader.readInt32()
	const awardItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < awardItemsLength; i++) {
	    STouchIslandEvent.DefaultData.awardItems.push(awardItems.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},STouchIslandEvent.DefaultData);
    }

    static Marshal(data: STouchIslandEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.islandId)
	buffer.writeInt32(data.result)
	buffer.writeCompactInt32(Object.keys(data.awardItems).length);
	data.awardItems.forEach((value) => {
		buffer.writeBuffer(awardItems.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default STouchIslandEvent;