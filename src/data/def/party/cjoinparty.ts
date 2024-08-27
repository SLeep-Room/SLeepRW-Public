
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CJoinParty {
	partyIdList : bigint[];
}

class CJoinParty {
    static DefaultData: CJoinParty = {
	partyIdList : [],
    }

    static Unmarshal(buffer: Buffer): CJoinParty { 
	const reader = new BufferReader(buffer)
try{
	const partyIdListLength = reader.readCompactUInt32();

	for (let i = 0; i < partyIdListLength; i++) {
	    CJoinParty.DefaultData.partyIdList.push(reader.readInt64());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CJoinParty.DefaultData);
    }

    static Marshal(data: CJoinParty): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.partyIdList).length);
	data.partyIdList.forEach((value) => {
		buffer.writeInt64(BigInt(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CJoinParty;