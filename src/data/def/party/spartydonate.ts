
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SPartyDonate {
	partyId : bigint;
	process : number;
	partyCoin : number;
	partyExp : number;
}

class SPartyDonate {
    static DefaultData: SPartyDonate = {
	partyId : 0n,
	process : 0,
	partyCoin : 0,
	partyExp : 0,
    }

    static Unmarshal(buffer: Buffer): SPartyDonate { 
	const reader = new BufferReader(buffer)
try{
	SPartyDonate.DefaultData.partyId = reader.readInt64()
	SPartyDonate.DefaultData.process = reader.readInt32()
	SPartyDonate.DefaultData.partyCoin = reader.readInt32()
	SPartyDonate.DefaultData.partyExp = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SPartyDonate.DefaultData);
    }

    static Marshal(data: SPartyDonate): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt32(data.process)
	buffer.writeInt32(data.partyCoin)
	buffer.writeInt32(data.partyExp)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SPartyDonate;