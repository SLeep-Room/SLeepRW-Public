
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SWeekBossTime {
	leftTime : bigint;
	resetTime : bigint;
	nightmareTime : bigint;
}

class SWeekBossTime {
    static DefaultData: SWeekBossTime = {
	leftTime : 0n,
	resetTime : 0n,
	nightmareTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SWeekBossTime { 
	const reader = new BufferReader(buffer)
try{
	SWeekBossTime.DefaultData.leftTime = reader.readInt64()
	SWeekBossTime.DefaultData.resetTime = reader.readInt64()
	SWeekBossTime.DefaultData.nightmareTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SWeekBossTime.DefaultData);
    }

    static Marshal(data: SWeekBossTime): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt64(BigInt(data.resetTime))
	buffer.writeInt64(BigInt(data.nightmareTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SWeekBossTime;