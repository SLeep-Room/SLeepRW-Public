
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenRewardList {
	receiveAward : number[];
	maxContinueId : number;
	score : number;
	endTime : bigint;
}

class SOpenRewardList {
    static DefaultData: SOpenRewardList = {
	receiveAward : [],
	maxContinueId : 0,
	score : 0,
	endTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SOpenRewardList { 
	const reader = new BufferReader(buffer)
try{
	const receiveAwardLength = reader.readCompactUInt32();

	for (let i = 0; i < receiveAwardLength; i++) {
	    SOpenRewardList.DefaultData.receiveAward.push(reader.readInt32());
	}
	SOpenRewardList.DefaultData.maxContinueId = reader.readInt32()
	SOpenRewardList.DefaultData.score = reader.readInt32()
	SOpenRewardList.DefaultData.endTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenRewardList.DefaultData);
    }

    static Marshal(data: SOpenRewardList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.receiveAward).length);
	data.receiveAward.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.maxContinueId)
	buffer.writeInt32(data.score)
	buffer.writeInt64(BigInt(data.endTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenRewardList;