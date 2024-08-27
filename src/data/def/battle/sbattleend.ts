
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import battleResult from '../../bean/battle/battleresult';
import itemList from '../../bean/item/beans/iteminfo';

interface SBattleEnd {
	battleType : number;
	id : number;
	battleResult : typeof battleResult.DefaultData;
	itemList : typeof itemList.DefaultData[];
	money : [number,bigint][];
	battleTime : bigint;
	playerExp : number;
	roleExp : [number,bigint][];
	roleGoodCurExp : [number,number][];
	roleGoodLv : [number,number][];
	roleGoodExp : [number,number][];
	rolesIndex : number[];
}

class SBattleEnd {
    static DefaultData: SBattleEnd = {
	battleType : 0,
	id : 0,
	battleResult : battleResult.DefaultData,
	itemList : [],
	money : [],
	battleTime : 0n,
	playerExp : 0,
	roleExp : [],
	roleGoodCurExp : [],
	roleGoodLv : [],
	roleGoodExp : [],
	rolesIndex : [],
    }

    static Unmarshal(buffer: Buffer): SBattleEnd { 
	const reader = new BufferReader(buffer)
try{
	SBattleEnd.DefaultData.battleType = reader.readInt32()
	SBattleEnd.DefaultData.id = reader.readInt32()
	SBattleEnd.DefaultData.battleResult = battleResult.Unmarshal(reader)
	const itemListLength = reader.readCompactUInt32();

	for (let i = 0; i < itemListLength; i++) {
	    SBattleEnd.DefaultData.itemList.push(itemList.Unmarshal(reader));
	}
	const moneyLength = reader.readCompactUInt32();

	for (let i = 0; i < moneyLength; i++) {
	    SBattleEnd.DefaultData.money.push([reader.readInt32(),reader.readInt64()]);
	}
	SBattleEnd.DefaultData.battleTime = reader.readInt64()
	SBattleEnd.DefaultData.playerExp = reader.readInt32()
	const roleExpLength = reader.readCompactUInt32();

	for (let i = 0; i < roleExpLength; i++) {
	    SBattleEnd.DefaultData.roleExp.push([reader.readInt32(),reader.readInt64()]);
	}
	const roleGoodCurExpLength = reader.readCompactUInt32();

	for (let i = 0; i < roleGoodCurExpLength; i++) {
	    SBattleEnd.DefaultData.roleGoodCurExp.push([reader.readInt32(),reader.readInt32()]);
	}
	const roleGoodLvLength = reader.readCompactUInt32();

	for (let i = 0; i < roleGoodLvLength; i++) {
	    SBattleEnd.DefaultData.roleGoodLv.push([reader.readInt32(),reader.readInt32()]);
	}
	const roleGoodExpLength = reader.readCompactUInt32();

	for (let i = 0; i < roleGoodExpLength; i++) {
	    SBattleEnd.DefaultData.roleGoodExp.push([reader.readInt32(),reader.readInt32()]);
	}
	const rolesIndexLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesIndexLength; i++) {
	    SBattleEnd.DefaultData.rolesIndex.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBattleEnd.DefaultData);
    }

    static Marshal(data: SBattleEnd): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleType)
	buffer.writeInt32(data.id)
	buffer.writeBuffer(battleResult.Marshal(data.battleResult))
	buffer.writeCompactInt32(Object.keys(data.itemList).length);
	data.itemList.forEach((value) => {
		buffer.writeBuffer(itemList.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.money).length);
	data.money.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});
	buffer.writeInt64(BigInt(data.battleTime))
	buffer.writeInt32(data.playerExp)
	buffer.writeCompactInt32(Object.keys(data.roleExp).length);
	data.roleExp.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});
	buffer.writeCompactInt32(Object.keys(data.roleGoodCurExp).length);
	data.roleGoodCurExp.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.roleGoodLv).length);
	data.roleGoodLv.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.roleGoodExp).length);
	data.roleGoodExp.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.rolesIndex).length);
	data.rolesIndex.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBattleEnd;