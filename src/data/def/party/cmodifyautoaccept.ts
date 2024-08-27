
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CModifyAutoAccept {
	partyId : bigint;
	autoAcceptApply : number;
}

class CModifyAutoAccept {
    static DefaultData: CModifyAutoAccept = {
	partyId : 0n,
	autoAcceptApply : 0,
    }

    static Unmarshal(buffer: Buffer): CModifyAutoAccept { 
	const reader = new BufferReader(buffer)
try{
	CModifyAutoAccept.DefaultData.partyId = reader.readInt64()
	CModifyAutoAccept.DefaultData.autoAcceptApply = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CModifyAutoAccept.DefaultData);
    }

    static Marshal(data: CModifyAutoAccept): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt32(data.autoAcceptApply)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CModifyAutoAccept;