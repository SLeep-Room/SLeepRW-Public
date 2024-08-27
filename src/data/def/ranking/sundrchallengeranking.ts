
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import personRank from '../../bean/ranking/undrchallenge';
import ranking from '../../bean/ranking/undrchallenge';

interface SUNDRChallengeRanking {
	seasonId : number;
	day : number;
	personRank : typeof personRank.DefaultData;
	ranking : typeof ranking.DefaultData[];
}

class SUNDRChallengeRanking {
    static DefaultData: SUNDRChallengeRanking = {
	seasonId : 0,
	day : 0,
	personRank : personRank.DefaultData,
	ranking : [],
    }

    static Unmarshal(buffer: Buffer): SUNDRChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	SUNDRChallengeRanking.DefaultData.seasonId = reader.readInt32()
	SUNDRChallengeRanking.DefaultData.day = reader.readInt32()
	SUNDRChallengeRanking.DefaultData.personRank = personRank.Unmarshal(reader)
	const rankingLength = reader.readCompactUInt32();

	for (let i = 0; i < rankingLength; i++) {
	    SUNDRChallengeRanking.DefaultData.ranking.push(ranking.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUNDRChallengeRanking.DefaultData);
    }

    static Marshal(data: SUNDRChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.seasonId)
	buffer.writeInt32(data.day)
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


export default SUNDRChallengeRanking;