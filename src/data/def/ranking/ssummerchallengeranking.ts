
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import personRank from '../../bean/ranking/undrchallenge';
import ranking from '../../bean/ranking/undrchallenge';

interface SSummerChallengeRanking {
	personRank : typeof personRank.DefaultData;
	ranking : typeof ranking.DefaultData[];
}

class SSummerChallengeRanking {
    static DefaultData: SSummerChallengeRanking = {
	personRank : personRank.DefaultData,
	ranking : [],
    }

    static Unmarshal(buffer: Buffer): SSummerChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	SSummerChallengeRanking.DefaultData.personRank = personRank.Unmarshal(reader)
	const rankingLength = reader.readCompactUInt32();

	for (let i = 0; i < rankingLength; i++) {
	    SSummerChallengeRanking.DefaultData.ranking.push(ranking.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSummerChallengeRanking.DefaultData);
    }

    static Marshal(data: SSummerChallengeRanking): Buffer { 
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


export default SSummerChallengeRanking;