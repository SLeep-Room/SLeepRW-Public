
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import achievement from '../../bean/task/achievementinfo';

interface SRefreshAchievementInfo {
	achievement : typeof achievement.DefaultData;
	sendType : number;
}

class SRefreshAchievementInfo {
    static DefaultData: SRefreshAchievementInfo = {
	achievement : achievement.DefaultData,
	sendType : 0,
    }

    static Unmarshal(buffer: Buffer): SRefreshAchievementInfo { 
	const reader = new BufferReader(buffer)
try{
	SRefreshAchievementInfo.DefaultData.achievement = achievement.Unmarshal(reader)
	SRefreshAchievementInfo.DefaultData.sendType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshAchievementInfo.DefaultData);
    }

    static Marshal(data: SRefreshAchievementInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(achievement.Marshal(data.achievement))
	buffer.writeInt32(data.sendType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshAchievementInfo;