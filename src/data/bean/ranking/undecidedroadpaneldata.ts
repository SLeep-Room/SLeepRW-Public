
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface UnDecidedRoadPanelData {
	passTime : bigint;
	power : number;
	score : number;
	roleIdList : number[];
	roleLvList : number[];
	roleBreakList : number[];
	roleSkinList : number[];
	runeLevelList : number[];
}

class UnDecidedRoadPanelData {
    static DefaultData: UnDecidedRoadPanelData = {
	passTime : 0n,
	power : 0,
	score : 0,
	roleIdList : [],
	roleLvList : [],
	roleBreakList : [],
	roleSkinList : [],
	runeLevelList : [],
    }

    static Unmarshal(buffer: BufferReader): UnDecidedRoadPanelData { 
	const reader = buffer
try{
	UnDecidedRoadPanelData.DefaultData.passTime = reader.readInt64()
	UnDecidedRoadPanelData.DefaultData.power = reader.readInt32()
	UnDecidedRoadPanelData.DefaultData.score = reader.readInt32()
	const roleIdListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleIdListLength; i++) {
	    UnDecidedRoadPanelData.DefaultData.roleIdList.push(reader.readInt32());
	}
	const roleLvListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleLvListLength; i++) {
	    UnDecidedRoadPanelData.DefaultData.roleLvList.push(reader.readInt32());
	}
	const roleBreakListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleBreakListLength; i++) {
	    UnDecidedRoadPanelData.DefaultData.roleBreakList.push(reader.readInt32());
	}
	const roleSkinListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleSkinListLength; i++) {
	    UnDecidedRoadPanelData.DefaultData.roleSkinList.push(reader.readInt32());
	}
	const runeLevelListLength = reader.readCompactUInt32();

	for (let i = 0; i < runeLevelListLength; i++) {
	    UnDecidedRoadPanelData.DefaultData.runeLevelList.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},UnDecidedRoadPanelData.DefaultData);
    }

    static Marshal(data: UnDecidedRoadPanelData): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.passTime))
	buffer.writeInt32(data.power)
	buffer.writeInt32(data.score)
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


export default UnDecidedRoadPanelData;