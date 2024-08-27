
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDismissParty {
	partyId : bigint;
	operate : number;
}

class CDismissParty {
    static DefaultData: CDismissParty = {
	partyId : 0n,
	operate : 0,
    }

    static Unmarshal(buffer: Buffer): CDismissParty { 
	const reader = new BufferReader(buffer)
try{
	CDismissParty.DefaultData.partyId = reader.readInt64()
	CDismissParty.DefaultData.operate = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDismissParty.DefaultData);
    }

    static Marshal(data: CDismissParty): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt32(data.operate)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDismissParty;