
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CWeekChallengeRanking {
}

class CWeekChallengeRanking {
    static DefaultData: CWeekChallengeRanking = {
    }

    static Unmarshal(buffer: Buffer): CWeekChallengeRanking { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CWeekChallengeRanking.DefaultData);
    }

    static Marshal(data: CWeekChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CWeekChallengeRanking;