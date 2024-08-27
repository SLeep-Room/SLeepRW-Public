
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CActivityChallengeRanking {
	activity : number;
	id : number;
}

class CActivityChallengeRanking {
    static DefaultData: CActivityChallengeRanking = {
	activity : 0,
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CActivityChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	CActivityChallengeRanking.DefaultData.activity = reader.readInt32()
	CActivityChallengeRanking.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CActivityChallengeRanking.DefaultData);
    }

    static Marshal(data: CActivityChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activity)
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CActivityChallengeRanking;