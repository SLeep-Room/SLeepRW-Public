
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CWatermelonChallengeRanking {
	id : number;
}

class CWatermelonChallengeRanking {
    static DefaultData: CWatermelonChallengeRanking = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CWatermelonChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	CWatermelonChallengeRanking.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CWatermelonChallengeRanking.DefaultData);
    }

    static Marshal(data: CWatermelonChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CWatermelonChallengeRanking;