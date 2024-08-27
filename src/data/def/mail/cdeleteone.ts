
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDeleteOne {
	uniqueId : bigint;
}

class CDeleteOne {
    static DefaultData: CDeleteOne = {
	uniqueId : 0n,
    }

    static Unmarshal(buffer: Buffer): CDeleteOne { 
	const reader = new BufferReader(buffer)
try{
	CDeleteOne.DefaultData.uniqueId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDeleteOne.DefaultData);
    }

    static Marshal(data: CDeleteOne): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.uniqueId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDeleteOne;