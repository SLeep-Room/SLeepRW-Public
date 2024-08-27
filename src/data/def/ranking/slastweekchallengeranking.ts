
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import topThreeRank from '../../bean/ranking/bosschallenge';

interface SLastWeekChallengeRanking {
	rankId : number;
	bossId : number;
	topThreeRank : typeof topThreeRank.DefaultData[];
}

class SLastWeekChallengeRanking {
    static DefaultData: SLastWeekChallengeRanking = {
	rankId : 0,
	bossId : 0,
	topThreeRank : [],
    }

    static Unmarshal(buffer: Buffer): SLastWeekChallengeRanking { 
	const reader = new BufferReader(buffer)
try{
	SLastWeekChallengeRanking.DefaultData.rankId = reader.readInt32()
	SLastWeekChallengeRanking.DefaultData.bossId = reader.readInt32()
	const topThreeRankLength = reader.readCompactUInt32();

	for (let i = 0; i < topThreeRankLength; i++) {
	    SLastWeekChallengeRanking.DefaultData.topThreeRank.push(topThreeRank.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLastWeekChallengeRanking.DefaultData);
    }

    static Marshal(data: SLastWeekChallengeRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rankId)
	buffer.writeInt32(data.bossId)
	buffer.writeCompactInt32(Object.keys(data.topThreeRank).length);
	data.topThreeRank.forEach((value) => {
		buffer.writeBuffer(topThreeRank.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLastWeekChallengeRanking;