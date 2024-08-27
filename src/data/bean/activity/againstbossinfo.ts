
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import weeklyAwardsList from '../../bean/activity/weeklyawards';
import witchInfo from '../../bean/activity/witchinfo';
import bossInfoList from '../../bean/activity/bossinfo';

interface AgainstBossInfo {
	weeklyAwardsList : typeof weeklyAwardsList.DefaultData[];
	witchInfo : typeof witchInfo.DefaultData;
	bossInfoList : typeof bossInfoList.DefaultData[];
}

class AgainstBossInfo {
    static DefaultData: AgainstBossInfo = {
	weeklyAwardsList : [],
	witchInfo : witchInfo.DefaultData,
	bossInfoList : [],
    }

    static Unmarshal(buffer: BufferReader): AgainstBossInfo { 
	const reader = buffer
try{
	const weeklyAwardsListLength = reader.readCompactUInt32();

	for (let i = 0; i < weeklyAwardsListLength; i++) {
	    AgainstBossInfo.DefaultData.weeklyAwardsList.push(weeklyAwardsList.Unmarshal(reader));
	}
	AgainstBossInfo.DefaultData.witchInfo = witchInfo.Unmarshal(reader)
	const bossInfoListLength = reader.readCompactUInt32();

	for (let i = 0; i < bossInfoListLength; i++) {
	    AgainstBossInfo.DefaultData.bossInfoList.push(bossInfoList.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},AgainstBossInfo.DefaultData);
    }

    static Marshal(data: AgainstBossInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.weeklyAwardsList).length);
	data.weeklyAwardsList.forEach((value) => {
		buffer.writeBuffer(weeklyAwardsList.Marshal(value))
	});
	buffer.writeBuffer(witchInfo.Marshal(data.witchInfo))
	buffer.writeCompactInt32(Object.keys(data.bossInfoList).length);
	data.bossInfoList.forEach((value) => {
		buffer.writeBuffer(bossInfoList.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default AgainstBossInfo;