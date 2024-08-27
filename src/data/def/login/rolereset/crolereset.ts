
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';

interface CRoleReset {
	roleId : number;
	isPreview : number;
}

class CRoleReset {
    static DefaultData: CRoleReset = {
	roleId : 0,
	isPreview : 0,
    }

    static Unmarshal(buffer: Buffer): CRoleReset { 
	const reader = new BufferReader(buffer)
try{
	CRoleReset.DefaultData.roleId = reader.readInt32()
	CRoleReset.DefaultData.isPreview = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRoleReset.DefaultData);
    }

    static Marshal(data: CRoleReset): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.isPreview)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRoleReset;