
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import firstItems from '../../bean/item/beans/iteminfo';
import randItems from '../../bean/item/beans/iteminfo';
import activityItems from '../../bean/item/beans/iteminfo';

interface ResourcePass {
	status : number;
	level : number;
	process : number;
	spirit : number;
	firstItems : typeof firstItems.DefaultData[];
	randItems : typeof randItems.DefaultData[];
	activityItems : typeof activityItems.DefaultData[];
	first : number;
}

class ResourcePass {
    static DefaultData: ResourcePass = {
	status : 0,
	level : 0,
	process : 0,
	spirit : 0,
	firstItems : [],
	randItems : [],
	activityItems : [],
	first : 0,
    }

    static Unmarshal(buffer: BufferReader): ResourcePass { 
	const reader = buffer
try{
	ResourcePass.DefaultData.status = reader.readInt32()
	ResourcePass.DefaultData.level = reader.readInt32()
	ResourcePass.DefaultData.process = reader.readInt32()
	ResourcePass.DefaultData.spirit = reader.readInt32()
	const firstItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < firstItemsLength; i++) {
	    ResourcePass.DefaultData.firstItems.push(firstItems.Unmarshal(reader));
	}
	const randItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < randItemsLength; i++) {
	    ResourcePass.DefaultData.randItems.push(randItems.Unmarshal(reader));
	}
	const activityItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < activityItemsLength; i++) {
	    ResourcePass.DefaultData.activityItems.push(activityItems.Unmarshal(reader));
	}
	ResourcePass.DefaultData.first = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ResourcePass.DefaultData);
    }

    static Marshal(data: ResourcePass): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.status)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.process)
	buffer.writeInt32(data.spirit)
	buffer.writeCompactInt32(Object.keys(data.firstItems).length);
	data.firstItems.forEach((value) => {
		buffer.writeBuffer(firstItems.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.randItems).length);
	data.randItems.forEach((value) => {
		buffer.writeBuffer(randItems.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.activityItems).length);
	data.activityItems.forEach((value) => {
		buffer.writeBuffer(activityItems.Marshal(value))
	});
	buffer.writeInt32(data.first)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ResourcePass;