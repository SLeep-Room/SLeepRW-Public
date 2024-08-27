
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface flowerProgress {
	flowerScore : bigint;
	allFlower : bigint;
	rewardIds : number[];
}

class flowerProgress {
    static DefaultData: flowerProgress = {
	flowerScore : 0n,
	allFlower : 0n,
	rewardIds : [],
    }

    static Unmarshal(buffer: BufferReader): flowerProgress { 
	const reader = buffer
try{
	flowerProgress.DefaultData.flowerScore = reader.readInt64()
	flowerProgress.DefaultData.allFlower = reader.readInt64()
	const rewardIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardIdsLength; i++) {
	    flowerProgress.DefaultData.rewardIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},flowerProgress.DefaultData);
    }

    static Marshal(data: flowerProgress): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.flowerScore))
	buffer.writeInt64(BigInt(data.allFlower))
	buffer.writeCompactInt32(Object.keys(data.rewardIds).length);
	data.rewardIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default flowerProgress;