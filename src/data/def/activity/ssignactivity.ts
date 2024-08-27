
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import awards from '../../bean/activity/signaward';

interface SSignActivity {
	actId : number;
	deadline : bigint;
	awards : typeof awards.DefaultData[];
	totalSignNum : number;
}

class SSignActivity {
    static DefaultData: SSignActivity = {
	actId : 0,
	deadline : 0n,
	awards : [],
	totalSignNum : 0,
    }

    static Unmarshal(buffer: Buffer): SSignActivity { 
	const reader = new BufferReader(buffer)
try{
	SSignActivity.DefaultData.actId = reader.readInt32()
	SSignActivity.DefaultData.deadline = reader.readInt64()
	const awardsLength = reader.readCompactUInt32();

	for (let i = 0; i < awardsLength; i++) {
	    SSignActivity.DefaultData.awards.push(awards.Unmarshal(reader));
	}
	SSignActivity.DefaultData.totalSignNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSignActivity.DefaultData);
    }

    static Marshal(data: SSignActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.actId)
	buffer.writeInt64(BigInt(data.deadline))
	buffer.writeCompactInt32(Object.keys(data.awards).length);
	data.awards.forEach((value) => {
		buffer.writeBuffer(awards.Marshal(value))
	});
	buffer.writeInt32(data.totalSignNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSignActivity;