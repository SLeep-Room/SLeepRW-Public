
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChooseSupportRole {
	userId : bigint;
}

class SChooseSupportRole {
    static DefaultData: SChooseSupportRole = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): SChooseSupportRole { 
	const reader = new BufferReader(buffer)
try{
	SChooseSupportRole.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChooseSupportRole.DefaultData);
    }

    static Marshal(data: SChooseSupportRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChooseSupportRole;