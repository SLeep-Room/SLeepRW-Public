
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface BossPanelData {
	passTime : bigint;
	power : number;
	times : number;
	roleIdList : number[];
	roleLvList : number[];
	roleBreakList : number[];
	roleSkinList : number[];
	runeLevelList : number[];
}

class BossPanelData {
    static DefaultData: BossPanelData = {
	passTime : 0n,
	power : 0,
	times : 0,
	roleIdList : [],
	roleLvList : [],
	roleBreakList : [],
	roleSkinList : [],
	runeLevelList : [],
    }

    static Unmarshal(buffer: BufferReader): BossPanelData { 
	const reader = buffer
try{
	BossPanelData.DefaultData.passTime = reader.readInt64()
	BossPanelData.DefaultData.power = reader.readInt32()
	BossPanelData.DefaultData.times = reader.readInt32()
	const roleIdListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleIdListLength; i++) {
	    BossPanelData.DefaultData.roleIdList.push(reader.readInt32());
	}
	const roleLvListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleLvListLength; i++) {
	    BossPanelData.DefaultData.roleLvList.push(reader.readInt32());
	}
	const roleBreakListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleBreakListLength; i++) {
	    BossPanelData.DefaultData.roleBreakList.push(reader.readInt32());
	}
	const roleSkinListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleSkinListLength; i++) {
	    BossPanelData.DefaultData.roleSkinList.push(reader.readInt32());
	}
	const runeLevelListLength = reader.readCompactUInt32();

	for (let i = 0; i < runeLevelListLength; i++) {
	    BossPanelData.DefaultData.runeLevelList.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BossPanelData.DefaultData);
    }

    static Marshal(data: BossPanelData): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.passTime))
	buffer.writeInt32(data.power)
	buffer.writeInt32(data.times)
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


export default BossPanelData;