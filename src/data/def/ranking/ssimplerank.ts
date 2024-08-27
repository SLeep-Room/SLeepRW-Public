
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import ranking from '../../bean/ranking/simplerank';
import playerRanking from '../../bean/ranking/simplerank';

interface SSimpleRank {
	rankType : number;
	rankId : number;
	ranking : typeof ranking.DefaultData[];
	playerRanking : typeof playerRanking.DefaultData;
}

class SSimpleRank {
    static DefaultData: SSimpleRank = {
	rankType : 0,
	rankId : 0,
	ranking : [],
	playerRanking : playerRanking.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SSimpleRank { 
	const reader = new BufferReader(buffer)
try{
	SSimpleRank.DefaultData.rankType = reader.readInt32()
	SSimpleRank.DefaultData.rankId = reader.readInt32()
	const rankingLength = reader.readCompactUInt32();

	for (let i = 0; i < rankingLength; i++) {
	    SSimpleRank.DefaultData.ranking.push(ranking.Unmarshal(reader));
	}
	SSimpleRank.DefaultData.playerRanking = playerRanking.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSimpleRank.DefaultData);
    }

    static Marshal(data: SSimpleRank): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rankType)
	buffer.writeInt32(data.rankId)
	buffer.writeCompactInt32(Object.keys(data.ranking).length);
	data.ranking.forEach((value) => {
		buffer.writeBuffer(ranking.Marshal(value))
	});
	buffer.writeBuffer(playerRanking.Marshal(data.playerRanking))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSimpleRank;