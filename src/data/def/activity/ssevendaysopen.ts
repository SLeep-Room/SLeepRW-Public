
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSevenDaysOpen {
	remainTime : bigint;
	version : number;
}

class SSevenDaysOpen {
    static DefaultData: SSevenDaysOpen = {
	remainTime : 0n,
	version : 0,
    }

    static Unmarshal(buffer: Buffer): SSevenDaysOpen { 
	const reader = new BufferReader(buffer)
try{
	SSevenDaysOpen.DefaultData.remainTime = reader.readInt64()
	SSevenDaysOpen.DefaultData.version = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSevenDaysOpen.DefaultData);
    }

    static Marshal(data: SSevenDaysOpen): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.remainTime))
	buffer.writeInt32(data.version)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSevenDaysOpen;