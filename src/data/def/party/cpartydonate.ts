
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CPartyDonate {
	partyId : bigint;
	donateItems : [number,number][];
}

class CPartyDonate {
    static DefaultData: CPartyDonate = {
	partyId : 0n,
	donateItems : [],
    }

    static Unmarshal(buffer: Buffer): CPartyDonate { 
	const reader = new BufferReader(buffer)
try{
	CPartyDonate.DefaultData.partyId = reader.readInt64()
	const donateItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < donateItemsLength; i++) {
	    CPartyDonate.DefaultData.donateItems.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CPartyDonate.DefaultData);
    }

    static Marshal(data: CPartyDonate): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeCompactInt32(Object.keys(data.donateItems).length);
	data.donateItems.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CPartyDonate;