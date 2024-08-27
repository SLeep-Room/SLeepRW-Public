
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAgainstBossGetWeeklyAwards {
	weeklyAwardId : number;
}

class CAgainstBossGetWeeklyAwards {
    static DefaultData: CAgainstBossGetWeeklyAwards = {
	weeklyAwardId : 0,
    }

    static Unmarshal(buffer: Buffer): CAgainstBossGetWeeklyAwards { 
	const reader = new BufferReader(buffer)
try{
	CAgainstBossGetWeeklyAwards.DefaultData.weeklyAwardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAgainstBossGetWeeklyAwards.DefaultData);
    }

    static Marshal(data: CAgainstBossGetWeeklyAwards): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.weeklyAwardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAgainstBossGetWeeklyAwards;