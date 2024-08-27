
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import battleNodes from '../../bean/battle/activitybattlenode';

interface SUpdateActivityBattleList {
	activityId : number;
	battleNodes : typeof battleNodes.DefaultData[];
}

class SUpdateActivityBattleList {
    static DefaultData: SUpdateActivityBattleList = {
	activityId : 0,
	battleNodes : [],
    }

    static Unmarshal(buffer: Buffer): SUpdateActivityBattleList { 
	const reader = new BufferReader(buffer)
try{
	SUpdateActivityBattleList.DefaultData.activityId = reader.readInt32()
	const battleNodesLength = reader.readCompactUInt32();

	for (let i = 0; i < battleNodesLength; i++) {
	    SUpdateActivityBattleList.DefaultData.battleNodes.push(battleNodes.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateActivityBattleList.DefaultData);
    }

    static Marshal(data: SUpdateActivityBattleList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeCompactInt32(Object.keys(data.battleNodes).length);
	data.battleNodes.forEach((value) => {
		buffer.writeBuffer(battleNodes.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateActivityBattleList;