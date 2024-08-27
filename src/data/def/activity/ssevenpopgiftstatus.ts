
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSevenPopGiftStatus {
	leftTime : bigint;
}

class SSevenPopGiftStatus {
    static DefaultData: SSevenPopGiftStatus = {
	leftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SSevenPopGiftStatus { 
	const reader = new BufferReader(buffer)
try{
	SSevenPopGiftStatus.DefaultData.leftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSevenPopGiftStatus.DefaultData);
    }

    static Marshal(data: SSevenPopGiftStatus): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.leftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSevenPopGiftStatus;