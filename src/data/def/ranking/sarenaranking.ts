
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import ranking from '../../bean/ranking/arenaranking';
import playerRanking from '../../bean/ranking/arenaranking';

interface SArenaRanking {
	index : number;
	ranking : typeof ranking.DefaultData[];
	playerRanking : typeof playerRanking.DefaultData;
}

class SArenaRanking {
    static DefaultData: SArenaRanking = {
	index : 0,
	ranking : [],
	playerRanking : playerRanking.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SArenaRanking { 
	const reader = new BufferReader(buffer)
try{
	SArenaRanking.DefaultData.index = reader.readInt32()
	const rankingLength = reader.readCompactUInt32();

	for (let i = 0; i < rankingLength; i++) {
	    SArenaRanking.DefaultData.ranking.push(ranking.Unmarshal(reader));
	}
	SArenaRanking.DefaultData.playerRanking = playerRanking.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SArenaRanking.DefaultData);
    }

    static Marshal(data: SArenaRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)
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


export default SArenaRanking;