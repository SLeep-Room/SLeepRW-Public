
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/iteminfo';

interface SChoosePointEvent {
	pointIndex : number;
	pointID : number;
	EventID : number;
	items : typeof items.DefaultData[];
	updateBuff : [number,number][];
	rolesState : [number,number][];
}

class SChoosePointEvent {
    static DefaultData: SChoosePointEvent = {
	pointIndex : 0,
	pointID : 0,
	EventID : 0,
	items : [],
	updateBuff : [],
	rolesState : [],
    }

    static Unmarshal(buffer: Buffer): SChoosePointEvent { 
	const reader = new BufferReader(buffer)
try{
	SChoosePointEvent.DefaultData.pointIndex = reader.readInt32()
	SChoosePointEvent.DefaultData.pointID = reader.readInt32()
	SChoosePointEvent.DefaultData.EventID = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SChoosePointEvent.DefaultData.items.push(items.Unmarshal(reader));
	}
	const updateBuffLength = reader.readCompactUInt32();

	for (let i = 0; i < updateBuffLength; i++) {
	    SChoosePointEvent.DefaultData.updateBuff.push([reader.readInt32(),reader.readInt32()]);
	}
	const rolesStateLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesStateLength; i++) {
	    SChoosePointEvent.DefaultData.rolesState.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChoosePointEvent.DefaultData);
    }

    static Marshal(data: SChoosePointEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.pointIndex)
	buffer.writeInt32(data.pointID)
	buffer.writeInt32(data.EventID)
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.updateBuff).length);
	data.updateBuff.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.rolesState).length);
	data.rolesState.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChoosePointEvent;