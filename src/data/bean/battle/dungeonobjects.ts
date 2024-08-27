
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/battle/randomitem';
import objs from '../../bean/battle/dungeonobj';
import npcs from '../../bean/battle/dungeonnpc';
import movableMonstersPosition from '../../bean/battle/point';

interface DungeonObjects {
	items : typeof items.DefaultData[];
	objs : typeof objs.DefaultData[];
	npcs : typeof npcs.DefaultData[];
	monsterIds : number[];
	movableMonstersPosition : [number,typeof movableMonstersPosition.DefaultData][];
	box : number[];
}

class DungeonObjects {
    static DefaultData: DungeonObjects = {
	items : [],
	objs : [],
	npcs : [],
	monsterIds : [],
	movableMonstersPosition : [],
	box : [],
    }

    static Unmarshal(buffer: BufferReader): DungeonObjects { 
	const reader = buffer
try{
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    DungeonObjects.DefaultData.items.push(items.Unmarshal(reader));
	}
	const objsLength = reader.readCompactUInt32();

	for (let i = 0; i < objsLength; i++) {
	    DungeonObjects.DefaultData.objs.push(objs.Unmarshal(reader));
	}
	const npcsLength = reader.readCompactUInt32();

	for (let i = 0; i < npcsLength; i++) {
	    DungeonObjects.DefaultData.npcs.push(npcs.Unmarshal(reader));
	}
	const monsterIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < monsterIdsLength; i++) {
	    DungeonObjects.DefaultData.monsterIds.push(reader.readInt32());
	}
	const movableMonstersPositionLength = reader.readCompactUInt32();

	for (let i = 0; i < movableMonstersPositionLength; i++) {
	    DungeonObjects.DefaultData.movableMonstersPosition.push([reader.readInt32(),movableMonstersPosition.Unmarshal(reader)]);
	}
	const boxLength = reader.readCompactUInt32();

	for (let i = 0; i < boxLength; i++) {
	    DungeonObjects.DefaultData.box.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DungeonObjects.DefaultData);
    }

    static Marshal(data: DungeonObjects): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.objs).length);
	data.objs.forEach((value) => {
		buffer.writeBuffer(objs.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.npcs).length);
	data.npcs.forEach((value) => {
		buffer.writeBuffer(npcs.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.monsterIds).length);
	data.monsterIds.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.movableMonstersPosition).length);
	data.movableMonstersPosition.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(movableMonstersPosition.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.box).length);
	data.box.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DungeonObjects;