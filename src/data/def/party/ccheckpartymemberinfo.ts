
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckPartyMemberInfo {
	partyId : bigint;
}

class CCheckPartyMemberInfo {
    static DefaultData: CCheckPartyMemberInfo = {
	partyId : 0n,
    }

    static Unmarshal(buffer: Buffer): CCheckPartyMemberInfo { 
	const reader = new BufferReader(buffer)
try{
	CCheckPartyMemberInfo.DefaultData.partyId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckPartyMemberInfo.DefaultData);
    }

    static Marshal(data: CCheckPartyMemberInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckPartyMemberInfo;