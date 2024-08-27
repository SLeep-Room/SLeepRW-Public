
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckPositionRemain {
	partyId : bigint;
}

class CCheckPositionRemain {
    static DefaultData: CCheckPositionRemain = {
	partyId : 0n,
    }

    static Unmarshal(buffer: Buffer): CCheckPositionRemain { 
	const reader = new BufferReader(buffer)
try{
	CCheckPositionRemain.DefaultData.partyId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckPositionRemain.DefaultData);
    }

    static Marshal(data: CCheckPositionRemain): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckPositionRemain;