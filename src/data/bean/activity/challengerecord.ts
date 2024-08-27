
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ChallengeRecord {
	score : number;
	time : bigint;
	roleIdList : number[];
	roleLvList : number[];
	roleBreakList : number[];
	roleSkinList : number[];
	runeLevelList : number[];
}

class ChallengeRecord {
    static DefaultData: ChallengeRecord = {
	score : 0,
	time : 0n,
	roleIdList : [],
	roleLvList : [],
	roleBreakList : [],
	roleSkinList : [],
	runeLevelList : [],
    }

    static Unmarshal(buffer: BufferReader): ChallengeRecord { 
	const reader = buffer
try{
	ChallengeRecord.DefaultData.score = reader.readInt32()
	ChallengeRecord.DefaultData.time = reader.readInt64()
	const roleIdListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleIdListLength; i++) {
	    ChallengeRecord.DefaultData.roleIdList.push(reader.readInt32());
	}
	const roleLvListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleLvListLength; i++) {
	    ChallengeRecord.DefaultData.roleLvList.push(reader.readInt32());
	}
	const roleBreakListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleBreakListLength; i++) {
	    ChallengeRecord.DefaultData.roleBreakList.push(reader.readInt32());
	}
	const roleSkinListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleSkinListLength; i++) {
	    ChallengeRecord.DefaultData.roleSkinList.push(reader.readInt32());
	}
	const runeLevelListLength = reader.readCompactUInt32();

	for (let i = 0; i < runeLevelListLength; i++) {
	    ChallengeRecord.DefaultData.runeLevelList.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ChallengeRecord.DefaultData);
    }

    static Marshal(data: ChallengeRecord): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.score)
	buffer.writeInt64(BigInt(data.time))
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


export default ChallengeRecord;