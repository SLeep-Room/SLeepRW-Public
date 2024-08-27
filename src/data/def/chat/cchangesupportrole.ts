
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeSupportRole {
	roleId : number;
}

class CChangeSupportRole {
    static DefaultData: CChangeSupportRole = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeSupportRole { 
	const reader = new BufferReader(buffer)
try{
	CChangeSupportRole.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeSupportRole.DefaultData);
    }

    static Marshal(data: CChangeSupportRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeSupportRole;