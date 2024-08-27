
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRequestRougeTowerOpen {
	openornot : number;
	leftTime : bigint;
}

class SRequestRougeTowerOpen {
    static DefaultData: SRequestRougeTowerOpen = {
	openornot : 0,
	leftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SRequestRougeTowerOpen { 
	const reader = new BufferReader(buffer)
try{
	SRequestRougeTowerOpen.DefaultData.openornot = reader.readInt32()
	SRequestRougeTowerOpen.DefaultData.leftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRequestRougeTowerOpen.DefaultData);
    }

    static Marshal(data: SRequestRougeTowerOpen): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.openornot)
	buffer.writeInt64(BigInt(data.leftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRequestRougeTowerOpen;