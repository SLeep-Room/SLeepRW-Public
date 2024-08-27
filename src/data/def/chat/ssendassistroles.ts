
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendAssistRoles {
	supportRole : number;
	displayRole : number[];
}

class SSendAssistRoles {
    static DefaultData: SSendAssistRoles = {
	supportRole : 0,
	displayRole : [],
    }

    static Unmarshal(buffer: Buffer): SSendAssistRoles { 
	const reader = new BufferReader(buffer)
try{
	SSendAssistRoles.DefaultData.supportRole = reader.readInt32()
	const displayRoleLength = reader.readCompactUInt32();

	for (let i = 0; i < displayRoleLength; i++) {
	    SSendAssistRoles.DefaultData.displayRole.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendAssistRoles.DefaultData);
    }

    static Marshal(data: SSendAssistRoles): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.supportRole)
	buffer.writeCompactInt32(Object.keys(data.displayRole).length);
	data.displayRole.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendAssistRoles;