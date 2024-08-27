
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChooseSupportRole {
	userId : bigint;
}

class CChooseSupportRole {
    static DefaultData: CChooseSupportRole = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): CChooseSupportRole { 
	const reader = new BufferReader(buffer)
try{
	CChooseSupportRole.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChooseSupportRole.DefaultData);
    }

    static Marshal(data: CChooseSupportRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChooseSupportRole;