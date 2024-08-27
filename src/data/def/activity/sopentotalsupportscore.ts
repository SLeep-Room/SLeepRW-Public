
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenTotalSupportScore {
	score : bigint;
	rewardIds : number[];
}

class SOpenTotalSupportScore {
    static DefaultData: SOpenTotalSupportScore = {
	score : 0n,
	rewardIds : [],
    }

    static Unmarshal(buffer: Buffer): SOpenTotalSupportScore { 
	const reader = new BufferReader(buffer)
try{
	SOpenTotalSupportScore.DefaultData.score = reader.readInt64()
	const rewardIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardIdsLength; i++) {
	    SOpenTotalSupportScore.DefaultData.rewardIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenTotalSupportScore.DefaultData);
    }

    static Marshal(data: SOpenTotalSupportScore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.score))
	buffer.writeCompactInt32(Object.keys(data.rewardIds).length);
	data.rewardIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenTotalSupportScore;