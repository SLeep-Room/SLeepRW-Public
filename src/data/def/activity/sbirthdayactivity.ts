
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBirthdayActivity {
	state : number;
	startDay : bigint;
	endDay : bigint;
	rewardRecord : number[];
	share : number;
	wish : number;
	maxMissionId : number;
	extraItemLeftTime : bigint;
}

class SBirthdayActivity {
    static DefaultData: SBirthdayActivity = {
	state : 0,
	startDay : 0n,
	endDay : 0n,
	rewardRecord : [],
	share : 0,
	wish : 0,
	maxMissionId : 0,
	extraItemLeftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SBirthdayActivity { 
	const reader = new BufferReader(buffer)
try{
	SBirthdayActivity.DefaultData.state = reader.readInt32()
	SBirthdayActivity.DefaultData.startDay = reader.readInt64()
	SBirthdayActivity.DefaultData.endDay = reader.readInt64()
	const rewardRecordLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardRecordLength; i++) {
	    SBirthdayActivity.DefaultData.rewardRecord.push(reader.readInt32());
	}
	SBirthdayActivity.DefaultData.share = reader.readInt32()
	SBirthdayActivity.DefaultData.wish = reader.readInt32()
	SBirthdayActivity.DefaultData.maxMissionId = reader.readInt32()
	SBirthdayActivity.DefaultData.extraItemLeftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBirthdayActivity.DefaultData);
    }

    static Marshal(data: SBirthdayActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)
	buffer.writeInt64(BigInt(data.startDay))
	buffer.writeInt64(BigInt(data.endDay))
	buffer.writeCompactInt32(Object.keys(data.rewardRecord).length);
	data.rewardRecord.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.share)
	buffer.writeInt32(data.wish)
	buffer.writeInt32(data.maxMissionId)
	buffer.writeInt64(BigInt(data.extraItemLeftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBirthdayActivity;