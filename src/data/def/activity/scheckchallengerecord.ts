
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import record from '../../bean/activity/challengerecord';

interface SCheckChallengeRecord {
	battleType : number;
	record : [number,typeof record.DefaultData][];
}

class SCheckChallengeRecord {
    static DefaultData: SCheckChallengeRecord = {
	battleType : 0,
	record : [],
    }

    static Unmarshal(buffer: Buffer): SCheckChallengeRecord { 
	const reader = new BufferReader(buffer)
try{
	SCheckChallengeRecord.DefaultData.battleType = reader.readInt32()
	const recordLength = reader.readCompactUInt32();

	for (let i = 0; i < recordLength; i++) {
	    SCheckChallengeRecord.DefaultData.record.push([reader.readInt32(),record.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCheckChallengeRecord.DefaultData);
    }

    static Marshal(data: SCheckChallengeRecord): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleType)
	buffer.writeCompactInt32(Object.keys(data.record).length);
	data.record.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(record.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCheckChallengeRecord;