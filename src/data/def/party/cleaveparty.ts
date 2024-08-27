
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLeaveParty {
	partyId : bigint;
}

class CLeaveParty {
    static DefaultData: CLeaveParty = {
	partyId : 0n,
    }

    static Unmarshal(buffer: Buffer): CLeaveParty { 
	const reader = new BufferReader(buffer)
try{
	CLeaveParty.DefaultData.partyId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLeaveParty.DefaultData);
    }

    static Marshal(data: CLeaveParty): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLeaveParty;