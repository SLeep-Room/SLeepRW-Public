
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import personRank from '../../bean/ranking/bosschallenge';
import ranking from '../../bean/ranking/bosschallenge';

interface SBossChallengeRanking {
	id : number;
	personRank : typeof personRank.DefaultData;
	ranking : typeof ranking.DefaultData[];
}

class SBossChallengeRanking {
    static DefaultData: SBossChallengeRanking = {
	id : 0,
	personRank : personRank.DefaultData,
	ranking : [],
    }

    static Unmarshal(buffer: Buffer): SBossChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	SBossChallengeRanking.DefaultData.id = reader.readInt32()
	SBossChallengeRanking.DefaultData.personRank = personRank.Unmarshal(reader)
	const rankingLength = reader.readCompactUInt32();

	for (let i = 0; i < rankingLength; i++) {
	    SBossChallengeRanking.DefaultData.ranking.push(ranking.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBossChallengeRanking.DefaultData);
    }

    static Marshal(data: SBossChallengeRanking): Buffer { 
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


export default SBossChallengeRanking;