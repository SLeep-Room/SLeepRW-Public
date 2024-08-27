
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SModifyPartyDeclaration {
	partyDeclaration : string;
}

class SModifyPartyDeclaration {
    static DefaultData: SModifyPartyDeclaration = {
	partyDeclaration : "",
    }

    static Unmarshal(buffer: Buffer): SModifyPartyDeclaration { 
	const reader = new BufferReader(buffer)
try{
	SModifyPartyDeclaration.DefaultData.partyDeclaration = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SModifyPartyDeclaration.DefaultData);
    }

    static Marshal(data: SModifyPartyDeclaration): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.partyDeclaration)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SModifyPartyDeclaration;