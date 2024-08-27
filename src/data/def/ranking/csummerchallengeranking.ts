
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSummerChallengeRanking {
}

class CSummerChallengeRanking {
    static DefaultData: CSummerChallengeRanking = {
    }

    static Unmarshal(buffer: Buffer): CSummerChallengeRanking { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSummerChallengeRanking.DefaultData);
    }

    static Marshal(data: CSummerChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSummerChallengeRanking;