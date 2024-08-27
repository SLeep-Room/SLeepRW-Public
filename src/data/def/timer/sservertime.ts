
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SServerTime {
	time : bigint;
}

class SServerTime {
    static DefaultData: SServerTime = {
	time : 0n,
    }

    static Unmarshal(buffer: Buffer): SServerTime { 
	const reader = new BufferReader(buffer)
try{
	SServerTime.DefaultData.time = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SServerTime.DefaultData);
    }

    static Marshal(data: SServerTime): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.time))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SServerTime;