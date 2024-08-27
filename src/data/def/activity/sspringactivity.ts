
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSpringActivity {
	state : number;
	beginTime : bigint;
	endTime : bigint;
	bossReward : number[];
	rankId : number;
}

class SSpringActivity {
    static DefaultData: SSpringActivity = {
	state : 0,
	beginTime : 0n,
	endTime : 0n,
	bossReward : [],
	rankId : 0,
    }

    static Unmarshal(buffer: Buffer): SSpringActivity { 
	const reader = new BufferReader(buffer)
try{
	SSpringActivity.DefaultData.state = reader.readInt32()
	SSpringActivity.DefaultData.beginTime = reader.readInt64()
	SSpringActivity.DefaultData.endTime = reader.readInt64()
	const bossRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < bossRewardLength; i++) {
	    SSpringActivity.DefaultData.bossReward.push(reader.readInt32());
	}
	SSpringActivity.DefaultData.rankId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSpringActivity.DefaultData);
    }

    static Marshal(data: SSpringActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)
	buffer.writeInt64(BigInt(data.beginTime))
	buffer.writeInt64(BigInt(data.endTime))
	buffer.writeCompactInt32(Object.keys(data.bossReward).length);
	data.bossReward.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.rankId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSpringActivity;