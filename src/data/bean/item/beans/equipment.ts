
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';
import randomEntry from '../../../bean/item/beans/randomentry';
import preRandomEntry from '../../../bean/item/beans/randomentry';
import skillRandomEntry from '../../../bean/item/beans/randomentry';
import finalAttrRandomEntry from '../../../bean/item/beans/randomentry';
import preFinalAttrRandomEntry from '../../../bean/item/beans/randomentry';

interface Equipment {
	equipType : number;
	stage : number;
	level : number;
	exp : number;
	power : number;
	baseAttr : [number,number][];
	finalAttr : [number,number][];
	randomEntry : typeof randomEntry.DefaultData[];
	preRandomEntry : typeof preRandomEntry.DefaultData[];
	skillRandomEntry : typeof skillRandomEntry.DefaultData;
	finalAttrRandomEntry : typeof finalAttrRandomEntry.DefaultData;
	preFinalAttrRandomEntry : typeof preFinalAttrRandomEntry.DefaultData;
	roleId : number;
	lock : number;
	viewDetails : number;
	range : [number,string][];
	recommend : number;
	luck : number;
	nextEnchantCost : number;
	enchant : number;
}

class Equipment {
    static DefaultData: Equipment = {
	equipType : 0,
	stage : 0,
	level : 0,
	exp : 0,
	power : 0,
	baseAttr : [],
	finalAttr : [],
	randomEntry : [],
	preRandomEntry : [],
	skillRandomEntry : skillRandomEntry.DefaultData,
	finalAttrRandomEntry : finalAttrRandomEntry.DefaultData,
	preFinalAttrRandomEntry : preFinalAttrRandomEntry.DefaultData,
	roleId : 0,
	lock : 0,
	viewDetails : 0,
	range : [],
	recommend : 0,
	luck : 0,
	nextEnchantCost : 0,
	enchant : 0,
    }

    static Unmarshal(buffer: BufferReader): Equipment { 
	const reader = buffer
try{
	Equipment.DefaultData.equipType = reader.readInt32()
	Equipment.DefaultData.stage = reader.readInt32()
	Equipment.DefaultData.level = reader.readInt32()
	Equipment.DefaultData.exp = reader.readInt32()
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
	const preRandomEntryLength = reader.readCompactUInt32();

	for (let i = 0; i < preRandomEntryLength; i++) {
	    Equipment.DefaultData.preRandomEntry.push(preRandomEntry.Unmarshal(reader));
	}
	Equipment.DefaultData.skillRandomEntry = skillRandomEntry.Unmarshal(reader)
	Equipment.DefaultData.finalAttrRandomEntry = finalAttrRandomEntry.Unmarshal(reader)
	Equipment.DefaultData.preFinalAttrRandomEntry = preFinalAttrRandomEntry.Unmarshal(reader)
	Equipment.DefaultData.roleId = reader.readInt32()
	Equipment.DefaultData.lock = reader.readInt32()
	Equipment.DefaultData.viewDetails = reader.readInt32()
	const rangeLength = reader.readCompactUInt32();

	for (let i = 0; i < rangeLength; i++) {
	    Equipment.DefaultData.range.push([reader.readInt32(),reader.readString()]);
	}
	Equipment.DefaultData.recommend = reader.readInt32()
	Equipment.DefaultData.luck = reader.readInt32()
	Equipment.DefaultData.nextEnchantCost = reader.readInt32()
	Equipment.DefaultData.enchant = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Equipment.DefaultData);
    }

    static Marshal(data: Equipment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.equipType)
	buffer.writeInt32(data.stage)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.exp)
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
	buffer.writeCompactInt32(Object.keys(data.preRandomEntry).length);
	data.preRandomEntry.forEach((value) => {
		buffer.writeBuffer(preRandomEntry.Marshal(value))
	});
	buffer.writeBuffer(skillRandomEntry.Marshal(data.skillRandomEntry))
	buffer.writeBuffer(finalAttrRandomEntry.Marshal(data.finalAttrRandomEntry))
	buffer.writeBuffer(preFinalAttrRandomEntry.Marshal(data.preFinalAttrRandomEntry))
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.lock)
	buffer.writeInt32(data.viewDetails)
	buffer.writeCompactInt32(Object.keys(data.range).length);
	data.range.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeString(value)
	});
	buffer.writeInt32(data.recommend)
	buffer.writeInt32(data.luck)
	buffer.writeInt32(data.nextEnchantCost)
	buffer.writeInt32(data.enchant)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Equipment;