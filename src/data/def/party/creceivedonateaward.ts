
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveDonateAward {
	partyId : bigint;
	awardId : number;
}

class CReceiveDonateAward {
    static DefaultData: CReceiveDonateAward = {
	partyId : 0n,
	awardId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveDonateAward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveDonateAward.DefaultData.partyId = reader.readInt64()
	CReceiveDonateAward.DefaultData.awardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveDonateAward.DefaultData);
    }

    static Marshal(data: CReceiveDonateAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt32(data.awardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveDonateAward;