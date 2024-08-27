
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SHandbook {
	equips : number[];
	monsters : number[];
	roles : [number,number][];
	npc : number[];
	worlds : number[];
	forces : number[];
	activities : number[];
	soulNums : [number,number][];
	lockedRoles : number[];
}

class SHandbook {
    static DefaultData: SHandbook = {
	equips : [],
	monsters : [],
	roles : [],
	npc : [],
	worlds : [],
	forces : [],
	activities : [],
	soulNums : [],
	lockedRoles : [],
    }

    static Unmarshal(buffer: Buffer): SHandbook { 
	const reader = new BufferReader(buffer)
try{
	const equipsLength = reader.readCompactUInt32();

	for (let i = 0; i < equipsLength; i++) {
	    SHandbook.DefaultData.equips.push(reader.readInt32());
	}
	const monstersLength = reader.readCompactUInt32();

	for (let i = 0; i < monstersLength; i++) {
	    SHandbook.DefaultData.monsters.push(reader.readInt32());
	}
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    SHandbook.DefaultData.roles.push([reader.readInt32(),reader.readInt32()]);
	}
	const npcLength = reader.readCompactUInt32();

	for (let i = 0; i < npcLength; i++) {
	    SHandbook.DefaultData.npc.push(reader.readInt32());
	}
	const worldsLength = reader.readCompactUInt32();

	for (let i = 0; i < worldsLength; i++) {
	    SHandbook.DefaultData.worlds.push(reader.readInt32());
	}
	const forcesLength = reader.readCompactUInt32();

	for (let i = 0; i < forcesLength; i++) {
	    SHandbook.DefaultData.forces.push(reader.readInt32());
	}
	const activitiesLength = reader.readCompactUInt32();

	for (let i = 0; i < activitiesLength; i++) {
	    SHandbook.DefaultData.activities.push(reader.readInt32());
	}
	const soulNumsLength = reader.readCompactUInt32();

	for (let i = 0; i < soulNumsLength; i++) {
	    SHandbook.DefaultData.soulNums.push([reader.readInt32(),reader.readInt32()]);
	}
	const lockedRolesLength = reader.readCompactUInt32();

	for (let i = 0; i < lockedRolesLength; i++) {
	    SHandbook.DefaultData.lockedRoles.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SHandbook.DefaultData);
    }

    static Marshal(data: SHandbook): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.equips).length);
	data.equips.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.monsters).length);
	data.monsters.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.npc).length);
	data.npc.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.worlds).length);
	data.worlds.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.forces).length);
	data.forces.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.activities).length);
	data.activities.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.soulNums).length);
	data.soulNums.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.lockedRoles).length);
	data.lockedRoles.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SHandbook;