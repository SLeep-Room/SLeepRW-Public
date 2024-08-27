
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import statuses from '../../bean/battle/status';
import enemyStatuses from '../../bean/battle/status';
import operate from '../../bean/battle/verifyinfolistbean';
import auto from '../../bean/battle/autofightskills';
import skills from '../../bean/battle/usedequipskills';

interface CBattleEnd {
	battletype : number;
	id : number;
	result : number;
	statuses : [number,typeof statuses.DefaultData][];
	enemyStatuses : [number,typeof enemyStatuses.DefaultData][];
	isAssisted : number;
	operate : typeof operate.DefaultData;
	stepNum : number;
	auto : typeof auto.DefaultData;
	skills : typeof skills.DefaultData[];
	killMonsterNum : [number,number][];
	skillinfo : [number,string][];
	versions : [number,number][];
	reconnection : number;
	interrupt : number;
	totalDamage : number;
}

class CBattleEnd {
    static DefaultData: CBattleEnd = {
	battletype : 0,
	id : 0,
	result : 0,
	statuses : [],
	enemyStatuses : [],
	isAssisted : 0,
	operate : operate.DefaultData,
	stepNum : 0,
	auto : auto.DefaultData,
	skills : [],
	killMonsterNum : [],
	skillinfo : [],
	versions : [],
	reconnection : 0,
	interrupt : 0,
	totalDamage : 0,
    }

    static Unmarshal(buffer: Buffer): CBattleEnd { 
	const reader = new BufferReader(buffer)
try{
	CBattleEnd.DefaultData.battletype = reader.readInt32()
	CBattleEnd.DefaultData.id = reader.readInt32()
	CBattleEnd.DefaultData.result = reader.readInt32()
	const statusesLength = reader.readCompactUInt32();

	for (let i = 0; i < statusesLength; i++) {
	    CBattleEnd.DefaultData.statuses.push([reader.readInt32(),statuses.Unmarshal(reader)]);
	}
	const enemyStatusesLength = reader.readCompactUInt32();

	for (let i = 0; i < enemyStatusesLength; i++) {
	    CBattleEnd.DefaultData.enemyStatuses.push([reader.readInt32(),enemyStatuses.Unmarshal(reader)]);
	}
	CBattleEnd.DefaultData.isAssisted = reader.readInt32()
	CBattleEnd.DefaultData.operate = operate.Unmarshal(reader)
	CBattleEnd.DefaultData.stepNum = reader.readInt32()
	CBattleEnd.DefaultData.auto = auto.Unmarshal(reader)
	const skillsLength = reader.readCompactUInt32();

	for (let i = 0; i < skillsLength; i++) {
	    CBattleEnd.DefaultData.skills.push(skills.Unmarshal(reader));
	}
	const killMonsterNumLength = reader.readCompactUInt32();

	for (let i = 0; i < killMonsterNumLength; i++) {
	    CBattleEnd.DefaultData.killMonsterNum.push([reader.readInt32(),reader.readInt32()]);
	}
	const skillinfoLength = reader.readCompactUInt32();

	for (let i = 0; i < skillinfoLength; i++) {
	    CBattleEnd.DefaultData.skillinfo.push([reader.readInt32(),reader.readString()]);
	}
	const versionsLength = reader.readCompactUInt32();

	for (let i = 0; i < versionsLength; i++) {
	    CBattleEnd.DefaultData.versions.push([reader.readInt32(),reader.readInt32()]);
	}
	CBattleEnd.DefaultData.reconnection = reader.readInt32()
	CBattleEnd.DefaultData.interrupt = reader.readInt32()
	CBattleEnd.DefaultData.totalDamage = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBattleEnd.DefaultData);
    }

    static Marshal(data: CBattleEnd): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battletype)
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.result)
	buffer.writeCompactInt32(Object.keys(data.statuses).length);
	data.statuses.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(statuses.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.enemyStatuses).length);
	data.enemyStatuses.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(enemyStatuses.Marshal(value))
	});
	buffer.writeInt32(data.isAssisted)
	buffer.writeBuffer(operate.Marshal(data.operate))
	buffer.writeInt32(data.stepNum)
	buffer.writeBuffer(auto.Marshal(data.auto))
	buffer.writeCompactInt32(Object.keys(data.skills).length);
	data.skills.forEach((value) => {
		buffer.writeBuffer(skills.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.killMonsterNum).length);
	data.killMonsterNum.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.skillinfo).length);
	data.skillinfo.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeString(value)
	});
	buffer.writeCompactInt32(Object.keys(data.versions).length);
	data.versions.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.reconnection)
	buffer.writeInt32(data.interrupt)
	buffer.writeInt32(data.totalDamage)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBattleEnd;