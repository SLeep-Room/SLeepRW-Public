
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface AchievementInfo {
	level : number;
	process : number;
	badges : [number,bigint][];
	showBadges : number[];
	unReceiveLevels : number[];
}

class AchievementInfo {
    static DefaultData: AchievementInfo = {
	level : 0,
	process : 0,
	badges : [],
	showBadges : [],
	unReceiveLevels : [],
    }

    static Unmarshal(buffer: BufferReader): AchievementInfo { 
	const reader = buffer
try{
	AchievementInfo.DefaultData.level = reader.readInt32()
	AchievementInfo.DefaultData.process = reader.readInt32()
	const badgesLength = reader.readCompactUInt32();

	for (let i = 0; i < badgesLength; i++) {
	    AchievementInfo.DefaultData.badges.push([reader.readInt32(),reader.readInt64()]);
	}
	const showBadgesLength = reader.readCompactUInt32();

	for (let i = 0; i < showBadgesLength; i++) {
	    AchievementInfo.DefaultData.showBadges.push(reader.readInt32());
	}
	const unReceiveLevelsLength = reader.readCompactUInt32();

	for (let i = 0; i < unReceiveLevelsLength; i++) {
	    AchievementInfo.DefaultData.unReceiveLevels.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},AchievementInfo.DefaultData);
    }

    static Marshal(data: AchievementInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.process)
	buffer.writeCompactInt32(Object.keys(data.badges).length);
	data.badges.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});
	buffer.writeCompactInt32(Object.keys(data.showBadges).length);
	data.showBadges.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.unReceiveLevels).length);
	data.unReceiveLevels.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default AchievementInfo;