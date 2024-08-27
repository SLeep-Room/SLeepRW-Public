
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSearchParty {
	partyId : bigint;
	excludePartyIds : bigint[];
}

class CSearchParty {
    static DefaultData: CSearchParty = {
	partyId : 0n,
	excludePartyIds : [],
    }

    static Unmarshal(buffer: Buffer): CSearchParty { 
	const reader = new BufferReader(buffer)
try{
	CSearchParty.DefaultData.partyId = reader.readInt64()
	const excludePartyIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < excludePartyIdsLength; i++) {
	    CSearchParty.DefaultData.excludePartyIds.push(reader.readInt64());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSearchParty.DefaultData);
    }

    static Marshal(data: CSearchParty): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeCompactInt32(Object.keys(data.excludePartyIds).length);
	data.excludePartyIds.forEach((value) => {
		buffer.writeInt64(BigInt(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSearchParty;