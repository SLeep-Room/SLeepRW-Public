
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CModifyPartyDeclaration {
	partyId : bigint;
	partyDeclaration : string;
}

class CModifyPartyDeclaration {
    static DefaultData: CModifyPartyDeclaration = {
	partyId : 0n,
	partyDeclaration : "",
    }

    static Unmarshal(buffer: Buffer): CModifyPartyDeclaration { 
	const reader = new BufferReader(buffer)
try{
	CModifyPartyDeclaration.DefaultData.partyId = reader.readInt64()
	CModifyPartyDeclaration.DefaultData.partyDeclaration = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CModifyPartyDeclaration.DefaultData);
    }

    static Marshal(data: CModifyPartyDeclaration): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeString(data.partyDeclaration)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CModifyPartyDeclaration;