
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import battleNodes from '../../bean/battle/activitybattlenode';

interface SGetActivityBattleList {
	activityId : number;
	time2NextPeriod : bigint;
	battleNodes : typeof battleNodes.DefaultData[];
}

class SGetActivityBattleList {
    static DefaultData: SGetActivityBattleList = {
	activityId : 0,
	time2NextPeriod : 0n,
	battleNodes : [],
    }

    static Unmarshal(buffer: Buffer): SGetActivityBattleList { 
	const reader = new BufferReader(buffer)
try{
	SGetActivityBattleList.DefaultData.activityId = reader.readInt32()
	SGetActivityBattleList.DefaultData.time2NextPeriod = reader.readInt64()
	const battleNodesLength = reader.readCompactUInt32();

	for (let i = 0; i < battleNodesLength; i++) {
	    SGetActivityBattleList.DefaultData.battleNodes.push(battleNodes.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetActivityBattleList.DefaultData);
    }

    static Marshal(data: SGetActivityBattleList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt64(BigInt(data.time2NextPeriod))
	buffer.writeCompactInt32(Object.keys(data.battleNodes).length);
	data.battleNodes.forEach((value) => {
		buffer.writeBuffer(battleNodes.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetActivityBattleList;