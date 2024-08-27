
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDealMemberApply {
	partyId : bigint;
	userId : bigint;
	operate : number;
}

class CDealMemberApply {
    static DefaultData: CDealMemberApply = {
	partyId : 0n,
	userId : 0n,
	operate : 0,
    }

    static Unmarshal(buffer: Buffer): CDealMemberApply { 
	const reader = new BufferReader(buffer)
try{
	CDealMemberApply.DefaultData.partyId = reader.readInt64()
	CDealMemberApply.DefaultData.userId = reader.readInt64()
	CDealMemberApply.DefaultData.operate = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDealMemberApply.DefaultData);
    }

    static Marshal(data: CDealMemberApply): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeInt32(data.operate)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDealMemberApply;