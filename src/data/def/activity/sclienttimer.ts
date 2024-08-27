
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCLientTimer {
	timeId : number;
	time : bigint;
}

class SCLientTimer {
    static DefaultData: SCLientTimer = {
	timeId : 0,
	time : 0n,
    }

    static Unmarshal(buffer: Buffer): SCLientTimer { 
	const reader = new BufferReader(buffer)
try{
	SCLientTimer.DefaultData.timeId = reader.readInt32()
	SCLientTimer.DefaultData.time = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCLientTimer.DefaultData);
    }

    static Marshal(data: SCLientTimer): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.timeId)
	buffer.writeInt64(BigInt(data.time))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCLientTimer;