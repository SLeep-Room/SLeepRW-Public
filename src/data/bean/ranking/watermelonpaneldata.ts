
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface WatermelonPanelData {
	damage : number;
	power : number;
	roleIdList : number[];
	roleLvList : number[];
	roleBreakList : number[];
	roleSkinList : number[];
	runeLevelList : number[];
}

class WatermelonPanelData {
    static DefaultData: WatermelonPanelData = {
	damage : 0,
	power : 0,
	roleIdList : [],
	roleLvList : [],
	roleBreakList : [],
	roleSkinList : [],
	runeLevelList : [],
    }

    static Unmarshal(buffer: BufferReader): WatermelonPanelData { 
	const reader = buffer
try{
	WatermelonPanelData.DefaultData.damage = reader.readInt32()
	WatermelonPanelData.DefaultData.power = reader.readInt32()
	const roleIdListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleIdListLength; i++) {
	    WatermelonPanelData.DefaultData.roleIdList.push(reader.readInt32());
	}
	const roleLvListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleLvListLength; i++) {
	    WatermelonPanelData.DefaultData.roleLvList.push(reader.readInt32());
	}
	const roleBreakListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleBreakListLength; i++) {
	    WatermelonPanelData.DefaultData.roleBreakList.push(reader.readInt32());
	}
	const roleSkinListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleSkinListLength; i++) {
	    WatermelonPanelData.DefaultData.roleSkinList.push(reader.readInt32());
	}
	const runeLevelListLength = reader.readCompactUInt32();

	for (let i = 0; i < runeLevelListLength; i++) {
	    WatermelonPanelData.DefaultData.runeLevelList.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},WatermelonPanelData.DefaultData);
    }

    static Marshal(data: WatermelonPanelData): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.damage)
	buffer.writeInt32(data.power)
	buffer.writeCompactInt32(Object.keys(data.roleIdList).length);
	data.roleIdList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.roleLvList).length);
	data.roleLvList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.roleBreakList).length);
	data.roleBreakList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.roleSkinList).length);
	data.roleSkinList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.runeLevelList).length);
	data.runeLevelList.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default WatermelonPanelData;