
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenChallengeMode {
	totalScore : number;
	curScore : number;
	passTime : bigint;
	rank : number;
}

class SOpenChallengeMode {
    static DefaultData: SOpenChallengeMode = {
	totalScore : 0,
	curScore : 0,
	passTime : 0n,
	rank : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenChallengeMode { 
	const reader = new BufferReader(buffer)
try{
	SOpenChallengeMode.DefaultData.totalScore = reader.readInt32()
	SOpenChallengeMode.DefaultData.curScore = reader.readInt32()
	SOpenChallengeMode.DefaultData.passTime = reader.readInt64()
	SOpenChallengeMode.DefaultData.rank = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenChallengeMode.DefaultData);
    }

    static Marshal(data: SOpenChallengeMode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.totalScore)
	buffer.writeInt32(data.curScore)
	buffer.writeInt64(BigInt(data.passTime))
	buffer.writeInt32(data.rank)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenChallengeMode;