
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetMidAutumnInfo {
	leftTime : bigint;
}

class SGetMidAutumnInfo {
    static DefaultData: SGetMidAutumnInfo = {
	leftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SGetMidAutumnInfo { 
	const reader = new BufferReader(buffer)
try{
	SGetMidAutumnInfo.DefaultData.leftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetMidAutumnInfo.DefaultData);
    }

    static Marshal(data: SGetMidAutumnInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.leftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetMidAutumnInfo;