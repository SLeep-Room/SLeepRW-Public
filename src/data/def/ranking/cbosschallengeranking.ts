
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBossChallengeRanking {
	id : number;
}

class CBossChallengeRanking {
    static DefaultData: CBossChallengeRanking = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CBossChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	CBossChallengeRanking.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBossChallengeRanking.DefaultData);
    }

    static Marshal(data: CBossChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBossChallengeRanking;