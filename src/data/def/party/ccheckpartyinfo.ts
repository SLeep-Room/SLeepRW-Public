
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckPartyInfo {
	partyId : bigint;
}

class CCheckPartyInfo {
    static DefaultData: CCheckPartyInfo = {
	partyId : 0n,
    }

    static Unmarshal(buffer: Buffer): CCheckPartyInfo { 
	const reader = new BufferReader(buffer)
try{
	CCheckPartyInfo.DefaultData.partyId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckPartyInfo.DefaultData);
    }

    static Marshal(data: CCheckPartyInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckPartyInfo;