
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SShowRewardProgress {
	totalPithy : bigint;
	rewardList : number[];
	maxContinueId : number;
}

class SShowRewardProgress {
    static DefaultData: SShowRewardProgress = {
	totalPithy : 0n,
	rewardList : [],
	maxContinueId : 0,
    }

    static Unmarshal(buffer: Buffer): SShowRewardProgress { 
	const reader = new BufferReader(buffer)
try{
	SShowRewardProgress.DefaultData.totalPithy = reader.readInt64()
	const rewardListLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardListLength; i++) {
	    SShowRewardProgress.DefaultData.rewardList.push(reader.readInt32());
	}
	SShowRewardProgress.DefaultData.maxContinueId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShowRewardProgress.DefaultData);
    }

    static Marshal(data: SShowRewardProgress): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.totalPithy))
	buffer.writeCompactInt32(Object.keys(data.rewardList).length);
	data.rewardList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.maxContinueId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShowRewardProgress;