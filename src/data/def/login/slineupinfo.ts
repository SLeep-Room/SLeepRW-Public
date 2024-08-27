
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import lineupList from '../../bean/login/lineup';
import supportRole from '../../bean/chat/supportrole';

interface SLineupInfo {
	commonLinupId : number;
	towerLineupId : number;
	bossRushLineupId : number;
	autoExploreLineupId : number;
	guardRestoreLineupId : number;
	damageStabLineupId : number;
	magicImpairLineupId : number;
	undecidedRoadLineupId : number;
	springFestivalLineupId : number;
	srChallengeLineupId : number;
	lineupList : typeof lineupList.DefaultData[];
	supportRole : typeof supportRole.DefaultData;
}

class SLineupInfo {
    static DefaultData: SLineupInfo = {
	commonLinupId : 0,
	towerLineupId : 0,
	bossRushLineupId : 0,
	autoExploreLineupId : 0,
	guardRestoreLineupId : 0,
	damageStabLineupId : 0,
	magicImpairLineupId : 0,
	undecidedRoadLineupId : 0,
	springFestivalLineupId : 0,
	srChallengeLineupId : 0,
	lineupList : [],
	supportRole : supportRole.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SLineupInfo { 
	const reader = new BufferReader(buffer)
try{
	SLineupInfo.DefaultData.commonLinupId = reader.readInt32()
	SLineupInfo.DefaultData.towerLineupId = reader.readInt32()
	SLineupInfo.DefaultData.bossRushLineupId = reader.readInt32()
	SLineupInfo.DefaultData.autoExploreLineupId = reader.readInt32()
	SLineupInfo.DefaultData.guardRestoreLineupId = reader.readInt32()
	SLineupInfo.DefaultData.damageStabLineupId = reader.readInt32()
	SLineupInfo.DefaultData.magicImpairLineupId = reader.readInt32()
	SLineupInfo.DefaultData.undecidedRoadLineupId = reader.readInt32()
	SLineupInfo.DefaultData.springFestivalLineupId = reader.readInt32()
	SLineupInfo.DefaultData.srChallengeLineupId = reader.readInt32()
	const lineupListLength = reader.readCompactUInt32();

	for (let i = 0; i < lineupListLength; i++) {
	    SLineupInfo.DefaultData.lineupList.push(lineupList.Unmarshal(reader));
	}
	SLineupInfo.DefaultData.supportRole = supportRole.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLineupInfo.DefaultData);
    }

    static Marshal(data: SLineupInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.commonLinupId)
	buffer.writeInt32(data.towerLineupId)
	buffer.writeInt32(data.bossRushLineupId)
	buffer.writeInt32(data.autoExploreLineupId)
	buffer.writeInt32(data.guardRestoreLineupId)
	buffer.writeInt32(data.damageStabLineupId)
	buffer.writeInt32(data.magicImpairLineupId)
	buffer.writeInt32(data.undecidedRoadLineupId)
	buffer.writeInt32(data.springFestivalLineupId)
	buffer.writeInt32(data.srChallengeLineupId)
	buffer.writeCompactInt32(Object.keys(data.lineupList).length);
	data.lineupList.forEach((value) => {
		buffer.writeBuffer(lineupList.Marshal(value))
	});
	buffer.writeBuffer(supportRole.Marshal(data.supportRole))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLineupInfo;