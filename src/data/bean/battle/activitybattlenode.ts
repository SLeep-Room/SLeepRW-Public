
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import firstItems from '../../bean/item/beans/iteminfo';
import normalItems from '../../bean/item/beans/iteminfo';
import randItems from '../../bean/item/beans/iteminfo';

interface ActivityBattleNode {
	id : number;
	status : number;
	level : number;
	battletype : number;
	spirit : number;
	firstItems : typeof firstItems.DefaultData[];
	normalItems : typeof normalItems.DefaultData[];
	randItems : typeof randItems.DefaultData[];
	first : number;
	bossLevel : number;
	lefttime : bigint;
	lefthp : bigint;
}

class ActivityBattleNode {
    static DefaultData: ActivityBattleNode = {
	id : 0,
	status : 0,
	level : 0,
	battletype : 0,
	spirit : 0,
	firstItems : [],
	normalItems : [],
	randItems : [],
	first : 0,
	bossLevel : 0,
	lefttime : 0n,
	lefthp : 0n,
    }

    static Unmarshal(buffer: BufferReader): ActivityBattleNode { 
	const reader = buffer
try{
	ActivityBattleNode.DefaultData.id = reader.readInt32()
	ActivityBattleNode.DefaultData.status = reader.readInt32()
	ActivityBattleNode.DefaultData.level = reader.readInt32()
	ActivityBattleNode.DefaultData.battletype = reader.readInt32()
	ActivityBattleNode.DefaultData.spirit = reader.readInt32()
	const firstItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < firstItemsLength; i++) {
	    ActivityBattleNode.DefaultData.firstItems.push(firstItems.Unmarshal(reader));
	}
	const normalItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < normalItemsLength; i++) {
	    ActivityBattleNode.DefaultData.normalItems.push(normalItems.Unmarshal(reader));
	}
	const randItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < randItemsLength; i++) {
	    ActivityBattleNode.DefaultData.randItems.push(randItems.Unmarshal(reader));
	}
	ActivityBattleNode.DefaultData.first = reader.readInt32()
	ActivityBattleNode.DefaultData.bossLevel = reader.readInt32()
	ActivityBattleNode.DefaultData.lefttime = reader.readInt64()
	ActivityBattleNode.DefaultData.lefthp = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ActivityBattleNode.DefaultData);
    }

    static Marshal(data: ActivityBattleNode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.status)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.battletype)
	buffer.writeInt32(data.spirit)
	buffer.writeCompactInt32(Object.keys(data.firstItems).length);
	data.firstItems.forEach((value) => {
		buffer.writeBuffer(firstItems.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.normalItems).length);
	data.normalItems.forEach((value) => {
		buffer.writeBuffer(normalItems.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.randItems).length);
	data.randItems.forEach((value) => {
		buffer.writeBuffer(randItems.Marshal(value))
	});
	buffer.writeInt32(data.first)
	buffer.writeInt32(data.bossLevel)
	buffer.writeInt64(BigInt(data.lefttime))
	buffer.writeInt64(BigInt(data.lefthp))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ActivityBattleNode;