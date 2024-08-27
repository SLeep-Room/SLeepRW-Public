
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CHoldParty {
	partyName : string;
	partyDeclaration : string;
	autoAcceptApply : number;
	avatarId : number;
}

class CHoldParty {
    static DefaultData: CHoldParty = {
	partyName : "",
	partyDeclaration : "",
	autoAcceptApply : 0,
	avatarId : 0,
    }

    static Unmarshal(buffer: Buffer): CHoldParty { 
	const reader = new BufferReader(buffer)
try{
	CHoldParty.DefaultData.partyName = reader.readString()
	CHoldParty.DefaultData.partyDeclaration = reader.readString()
	CHoldParty.DefaultData.autoAcceptApply = reader.readInt32()
	CHoldParty.DefaultData.avatarId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CHoldParty.DefaultData);
    }

    static Marshal(data: CHoldParty): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.partyName)
	buffer.writeString(data.partyDeclaration)
	buffer.writeInt32(data.autoAcceptApply)
	buffer.writeInt32(data.avatarId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CHoldParty;