
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRespondApplicant {
	userId : bigint;
	result : number;
}

class CRespondApplicant {
    static DefaultData: CRespondApplicant = {
	userId : 0n,
	result : 0,
    }

    static Unmarshal(buffer: Buffer): CRespondApplicant { 
	const reader = new BufferReader(buffer)
try{
	CRespondApplicant.DefaultData.userId = reader.readInt64()
	CRespondApplicant.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRespondApplicant.DefaultData);
    }

    static Marshal(data: CRespondApplicant): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRespondApplicant;