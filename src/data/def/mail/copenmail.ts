
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenMail {
	uniqueId : bigint;
}

class COpenMail {
    static DefaultData: COpenMail = {
	uniqueId : 0n,
    }

    static Unmarshal(buffer: Buffer): COpenMail { 
	const reader = new BufferReader(buffer)
try{
	COpenMail.DefaultData.uniqueId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenMail.DefaultData);
    }

    static Marshal(data: COpenMail): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.uniqueId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenMail;