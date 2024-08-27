
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import itemList from '../../bean/item/beans/iteminfo';

interface SSweepResult {
	itemList : typeof itemList.DefaultData[];
	money : [number,bigint][];
	playerExp : number;
	roleExp : [number,bigint][];
	roleGoodCurExp : [number,number][];
	roleGoodLv : [number,number][];
	roleGoodExp : [number,number][];
	rolesIndex : [number,number][];
	restituteReward : [number,bigint][];
}

class SSweepResult {
    static DefaultData: SSweepResult = {
	itemList : [],
	money : [],
	playerExp : 0,
	roleExp : [],
	roleGoodCurExp : [],
	roleGoodLv : [],
	roleGoodExp : [],
	rolesIndex : [],
	restituteReward : [],
    }

    static Unmarshal(buffer: Buffer): SSweepResult { 
	const reader = new BufferReader(buffer)
try{
	const itemListLength = reader.readCompactUInt32();

	for (let i = 0; i < itemListLength; i++) {
	    SSweepResult.DefaultData.itemList.push(itemList.Unmarshal(reader));
	}
	const moneyLength = reader.readCompactUInt32();

	for (let i = 0; i < moneyLength; i++) {
	    SSweepResult.DefaultData.money.push([reader.readInt32(),reader.readInt64()]);
	}
	SSweepResult.DefaultData.playerExp = reader.readInt32()
	const roleExpLength = reader.readCompactUInt32();

	for (let i = 0; i < roleExpLength; i++) {
	    SSweepResult.DefaultData.roleExp.push([reader.readInt32(),reader.readInt64()]);
	}
	const roleGoodCurExpLength = reader.readCompactUInt32();

	for (let i = 0; i < roleGoodCurExpLength; i++) {
	    SSweepResult.DefaultData.roleGoodCurExp.push([reader.readInt32(),reader.readInt32()]);
	}
	const roleGoodLvLength = reader.readCompactUInt32();

	for (let i = 0; i < roleGoodLvLength; i++) {
	    SSweepResult.DefaultData.roleGoodLv.push([reader.readInt32(),reader.readInt32()]);
	}
	const roleGoodExpLength = reader.readCompactUInt32();

	for (let i = 0; i < roleGoodExpLength; i++) {
	    SSweepResult.DefaultData.roleGoodExp.push([reader.readInt32(),reader.readInt32()]);
	}
	const rolesIndexLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesIndexLength; i++) {
	    SSweepResult.DefaultData.rolesIndex.push([reader.readInt32(),reader.readInt32()]);
	}
	const restituteRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < restituteRewardLength; i++) {
	    SSweepResult.DefaultData.restituteReward.push([reader.readInt32(),reader.readInt64()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSweepResult.DefaultData);
    }

    static Marshal(data: SSweepResult): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.itemList).length);
	data.itemList.forEach((value) => {
		buffer.writeBuffer(itemList.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.money).length);
	data.money.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});
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
	data.rolesIndex.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.restituteReward).length);
	data.restituteReward.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSweepResult;