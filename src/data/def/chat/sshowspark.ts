
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SShowSpark {
	userId : bigint;
}

class SShowSpark {
    static DefaultData: SShowSpark = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): SShowSpark { 
	const reader = new BufferReader(buffer)
try{
	SShowSpark.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShowSpark.DefaultData);
    }

    static Marshal(data: SShowSpark): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShowSpark;