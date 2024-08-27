
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import personRank from '../../bean/ranking/bosschallenge';
import ranking from '../../bean/ranking/bosschallenge';

interface SWeekChallengeRanking {
	personRank : typeof personRank.DefaultData;
	ranking : typeof ranking.DefaultData[];
}

class SWeekChallengeRanking {
    static DefaultData: SWeekChallengeRanking = {
	personRank : personRank.DefaultData,
	ranking : [],
    }

    static Unmarshal(buffer: Buffer): SWeekChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	SWeekChallengeRanking.DefaultData.personRank = personRank.Unmarshal(reader)
	const rankingLength = reader.readCompactUInt32();

	for (let i = 0; i < rankingLength; i++) {
	    SWeekChallengeRanking.DefaultData.ranking.push(ranking.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SWeekChallengeRanking.DefaultData);
    }

    static Marshal(data: SWeekChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{
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


export default SWeekChallengeRanking;