
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveOne {
	uniqueId : bigint;
}

class CReceiveOne {
    static DefaultData: CReceiveOne = {
	uniqueId : 0n,
    }

    static Unmarshal(buffer: Buffer): CReceiveOne { 
	const reader = new BufferReader(buffer)
try{
	CReceiveOne.DefaultData.uniqueId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveOne.DefaultData);
    }

    static Marshal(data: CReceiveOne): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.uniqueId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveOne;