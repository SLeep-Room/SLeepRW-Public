
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import randomEntry from '../../bean/item/beans/randomentry';
import skillRandomEntry from '../../bean/item/beans/randomentry';
import finalAttrRandomEntry from '../../bean/item/beans/randomentry';

interface Equipment {
	itemId : number;
	equipType : number;
	level : number;
	power : number;
	baseAttr : [number,number][];
	finalAttr : [number,number][];
	randomEntry : typeof randomEntry.DefaultData[];
	skillRandomEntry : typeof skillRandomEntry.DefaultData;
	finalAttrRandomEntry : typeof finalAttrRandomEntry.DefaultData;
	range : [number,string][];
	recommend : number;
	stage : number;
}

class Equipment {
    static DefaultData: Equipment = {
	itemId : 0,
	equipType : 0,
	level : 0,
	power : 0,
	baseAttr : [],
	finalAttr : [],
	randomEntry : [],
	skillRandomEntry : skillRandomEntry.DefaultData,
	finalAttrRandomEntry : finalAttrRandomEntry.DefaultData,
	range : [],
	recommend : 0,
	stage : 0,
    }

    static Unmarshal(buffer: BufferReader): Equipment { 
	const reader = buffer
try{
	Equipment.DefaultData.itemId = reader.readInt32()
	Equipment.DefaultData.equipType = reader.readInt32()
	Equipment.DefaultData.level = reader.readInt32()
	Equipment.DefaultData.power = reader.readInt32()
	const baseAttrLength = reader.readCompactUInt32();

	for (let i = 0; i < baseAttrLength; i++) {
	    Equipment.DefaultData.baseAttr.push([reader.readInt32(),reader.readInt32()]);
	}
	const finalAttrLength = reader.readCompactUInt32();

	for (let i = 0; i < finalAttrLength; i++) {
	    Equipment.DefaultData.finalAttr.push([reader.readInt32(),reader.readInt32()]);
	}
	const randomEntryLength = reader.readCompactUInt32();

	for (let i = 0; i < randomEntryLength; i++) {
	    Equipment.DefaultData.randomEntry.push(randomEntry.Unmarshal(reader));
	}
	Equipment.DefaultData.skillRandomEntry = skillRandomEntry.Unmarshal(reader)
	Equipment.DefaultData.finalAttrRandomEntry = finalAttrRandomEntry.Unmarshal(reader)
	const rangeLength = reader.readCompactUInt32();

	for (let i = 0; i < rangeLength; i++) {
	    Equipment.DefaultData.range.push([reader.readInt32(),reader.readString()]);
	}
	Equipment.DefaultData.recommend = reader.readInt32()
	Equipment.DefaultData.stage = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Equipment.DefaultData);
    }

    static Marshal(data: Equipment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.equipType)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.power)
	buffer.writeCompactInt32(Object.keys(data.baseAttr).length);
	data.baseAttr.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.finalAttr).length);
	data.finalAttr.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.randomEntry).length);
	data.randomEntry.forEach((value) => {
		buffer.writeBuffer(randomEntry.Marshal(value))
	});
	buffer.writeBuffer(skillRandomEntry.Marshal(data.skillRandomEntry))
	buffer.writeBuffer(finalAttrRandomEntry.Marshal(data.finalAttrRandomEntry))
	buffer.writeCompactInt32(Object.keys(data.range).length);
	data.range.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeString(value)
	});
	buffer.writeInt32(data.recommend)
	buffer.writeInt32(data.stage)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Equipment;