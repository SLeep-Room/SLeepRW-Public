
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRougeTowerOpenorNot {
	openornot : number;
	leftTime : bigint;
}

class SRougeTowerOpenorNot {
    static DefaultData: SRougeTowerOpenorNot = {
	openornot : 0,
	leftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SRougeTowerOpenorNot { 
	const reader = new BufferReader(buffer)
try{
	SRougeTowerOpenorNot.DefaultData.openornot = reader.readInt32()
	SRougeTowerOpenorNot.DefaultData.leftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRougeTowerOpenorNot.DefaultData);
    }

    static Marshal(data: SRougeTowerOpenorNot): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.openornot)
	buffer.writeInt64(BigInt(data.leftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRougeTowerOpenorNot;