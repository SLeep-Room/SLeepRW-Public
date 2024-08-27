
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import personRank from '../../bean/ranking/watermelonchallenge';
import ranking from '../../bean/ranking/watermelonchallenge';

interface SWatermelonChallengeRanking {
	id : number;
	personRank : typeof personRank.DefaultData;
	ranking : typeof ranking.DefaultData[];
}

class SWatermelonChallengeRanking {
    static DefaultData: SWatermelonChallengeRanking = {
	id : 0,
	personRank : personRank.DefaultData,
	ranking : [],
    }

    static Unmarshal(buffer: Buffer): SWatermelonChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	SWatermelonChallengeRanking.DefaultData.id = reader.readInt32()
	SWatermelonChallengeRanking.DefaultData.personRank = personRank.Unmarshal(reader)
	const rankingLength = reader.readCompactUInt32();

	for (let i = 0; i < rankingLength; i++) {
	    SWatermelonChallengeRanking.DefaultData.ranking.push(ranking.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SWatermelonChallengeRanking.DefaultData);
    }

    static Marshal(data: SWatermelonChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeBuffer(personRank.Marshal(data.personRank))
	buffer.writeCompactInt32(Object.keys(data.ranking).length);
	data.ranking.forEach((value) => {
		buffer.writeBuffer(ranking.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SWatermelonChallengeRanking;