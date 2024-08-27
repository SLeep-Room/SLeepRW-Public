
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenChristmasSupportActivity {
	state : number;
	rewardIds : number[];
	score : number;
	activityLeftTime : bigint;
	supportLeftTime : bigint;
	canSupport : number;
}

class SOpenChristmasSupportActivity {
    static DefaultData: SOpenChristmasSupportActivity = {
	state : 0,
	rewardIds : [],
	score : 0,
	activityLeftTime : 0n,
	supportLeftTime : 0n,
	canSupport : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenChristmasSupportActivity { 
	const reader = new BufferReader(buffer)
try{
	SOpenChristmasSupportActivity.DefaultData.state = reader.readInt32()
	const rewardIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardIdsLength; i++) {
	    SOpenChristmasSupportActivity.DefaultData.rewardIds.push(reader.readInt32());
	}
	SOpenChristmasSupportActivity.DefaultData.score = reader.readInt32()
	SOpenChristmasSupportActivity.DefaultData.activityLeftTime = reader.readInt64()
	SOpenChristmasSupportActivity.DefaultData.supportLeftTime = reader.readInt64()
	SOpenChristmasSupportActivity.DefaultData.canSupport = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenChristmasSupportActivity.DefaultData);
    }

    static Marshal(data: SOpenChristmasSupportActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)
	buffer.writeCompactInt32(Object.keys(data.rewardIds).length);
	data.rewardIds.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.score)
	buffer.writeInt64(BigInt(data.activityLeftTime))
	buffer.writeInt64(BigInt(data.supportLeftTime))
	buffer.writeInt32(data.canSupport)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenChristmasSupportActivity;