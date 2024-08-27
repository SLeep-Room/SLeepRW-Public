
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveDonateAward {
	partyId : bigint;
	awardId : number;
}

class SReceiveDonateAward {
    static DefaultData: SReceiveDonateAward = {
	partyId : 0n,
	awardId : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveDonateAward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveDonateAward.DefaultData.partyId = reader.readInt64()
	SReceiveDonateAward.DefaultData.awardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveDonateAward.DefaultData);
    }

    static Marshal(data: SReceiveDonateAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt32(data.awardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveDonateAward;