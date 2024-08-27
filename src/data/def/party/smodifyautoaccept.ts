
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SModifyAutoAccept {
	partyId : bigint;
	autoAcceptApply : number;
}

class SModifyAutoAccept {
    static DefaultData: SModifyAutoAccept = {
	partyId : 0n,
	autoAcceptApply : 0,
    }

    static Unmarshal(buffer: Buffer): SModifyAutoAccept { 
	const reader = new BufferReader(buffer)
try{
	SModifyAutoAccept.DefaultData.partyId = reader.readInt64()
	SModifyAutoAccept.DefaultData.autoAcceptApply = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SModifyAutoAccept.DefaultData);
    }

    static Marshal(data: SModifyAutoAccept): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt32(data.autoAcceptApply)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SModifyAutoAccept;