
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveReward {
	rewardIds : number[];
}

class SReceiveReward {
    static DefaultData: SReceiveReward = {
	rewardIds : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveReward { 
	const reader = new BufferReader(buffer)
try{
	const rewardIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardIdsLength; i++) {
	    SReceiveReward.DefaultData.rewardIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveReward.DefaultData);
    }

    static Marshal(data: SReceiveReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.rewardIds).length);
	data.rewardIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveReward;