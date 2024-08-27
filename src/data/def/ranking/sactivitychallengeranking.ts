
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import personRank from '../../bean/ranking/bosschallenge';
import ranking from '../../bean/ranking/bosschallenge';

interface SActivityChallengeRanking {
	activity : number;
	id : number;
	personRank : typeof personRank.DefaultData;
	ranking : typeof ranking.DefaultData[];
}

class SActivityChallengeRanking {
    static DefaultData: SActivityChallengeRanking = {
	activity : 0,
	id : 0,
	personRank : personRank.DefaultData,
	ranking : [],
    }

    static Unmarshal(buffer: Buffer): SActivityChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	SActivityChallengeRanking.DefaultData.activity = reader.readInt32()
	SActivityChallengeRanking.DefaultData.id = reader.readInt32()
	SActivityChallengeRanking.DefaultData.personRank = personRank.Unmarshal(reader)
	const rankingLength = reader.readCompactUInt32();

	for (let i = 0; i < rankingLength; i++) {
	    SActivityChallengeRanking.DefaultData.ranking.push(ranking.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SActivityChallengeRanking.DefaultData);
    }

    static Marshal(data: SActivityChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activity)
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


export default SActivityChallengeRanking;