
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRemoveMember {
	partyId : bigint;
	userId : bigint;
}

class CRemoveMember {
    static DefaultData: CRemoveMember = {
	partyId : 0n,
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): CRemoveMember { 
	const reader = new BufferReader(buffer)
try{
	CRemoveMember.DefaultData.partyId = reader.readInt64()
	CRemoveMember.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRemoveMember.DefaultData);
    }

    static Marshal(data: CRemoveMember): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRemoveMember;