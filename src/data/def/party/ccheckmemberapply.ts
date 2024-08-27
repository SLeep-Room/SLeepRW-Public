
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckMemberApply {
	partyId : bigint;
}

class CCheckMemberApply {
    static DefaultData: CCheckMemberApply = {
	partyId : 0n,
    }

    static Unmarshal(buffer: Buffer): CCheckMemberApply { 
	const reader = new BufferReader(buffer)
try{
	CCheckMemberApply.DefaultData.partyId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckMemberApply.DefaultData);
    }

    static Marshal(data: CCheckMemberApply): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckMemberApply;