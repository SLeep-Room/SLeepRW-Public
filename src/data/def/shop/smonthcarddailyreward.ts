
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SMonthCardDailyReward {
	dailyReward : [number,number][];
}

class SMonthCardDailyReward {
    static DefaultData: SMonthCardDailyReward = {
	dailyReward : [],
    }

    static Unmarshal(buffer: Buffer): SMonthCardDailyReward { 
	const reader = new BufferReader(buffer)
try{
	const dailyRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < dailyRewardLength; i++) {
	    SMonthCardDailyReward.DefaultData.dailyReward.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SMonthCardDailyReward.DefaultData);
    }

    static Marshal(data: SMonthCardDailyReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.dailyReward).length);
	data.dailyReward.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SMonthCardDailyReward;