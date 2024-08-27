
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUNDRChallengeRanking {
	seasonId : number;
	day : number;
}

class CUNDRChallengeRanking {
    static DefaultData: CUNDRChallengeRanking = {
	seasonId : 0,
	day : 0,
    }

    static Unmarshal(buffer: Buffer): CUNDRChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	CUNDRChallengeRanking.DefaultData.seasonId = reader.readInt32()
	CUNDRChallengeRanking.DefaultData.day = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUNDRChallengeRanking.DefaultData);
    }

    static Marshal(data: CUNDRChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.seasonId)
	buffer.writeInt32(data.day)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUNDRChallengeRanking;