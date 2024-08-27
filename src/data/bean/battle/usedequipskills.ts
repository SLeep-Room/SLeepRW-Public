
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface UsedEquipSkills {
	roleId : number;
	skillIds : number[];
}

class UsedEquipSkills {
    static DefaultData: UsedEquipSkills = {
	roleId : 0,
	skillIds : [],
    }

    static Unmarshal(buffer: BufferReader): UsedEquipSkills { 
	const reader = buffer
try{
	UsedEquipSkills.DefaultData.roleId = reader.readInt32()
	const skillIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < skillIdsLength; i++) {
	    UsedEquipSkills.DefaultData.skillIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},UsedEquipSkills.DefaultData);
    }

    static Marshal(data: UsedEquipSkills): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeCompactInt32(Object.keys(data.skillIds).length);
	data.skillIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default UsedEquipSkills;