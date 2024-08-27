
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeSupportRole {
	roleIds : number;
}

class SChangeSupportRole {
    static DefaultData: SChangeSupportRole = {
	roleIds : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeSupportRole { 
	const reader = new BufferReader(buffer)
try{
	SChangeSupportRole.DefaultData.roleIds = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeSupportRole.DefaultData);
    }

    static Marshal(data: SChangeSupportRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleIds)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeSupportRole;