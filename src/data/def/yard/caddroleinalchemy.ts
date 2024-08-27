
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAddRoleInAlchemy {
	roleId : number;
}

class CAddRoleInAlchemy {
    static DefaultData: CAddRoleInAlchemy = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CAddRoleInAlchemy { 
	const reader = new BufferReader(buffer)
try{
	CAddRoleInAlchemy.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAddRoleInAlchemy.DefaultData);
    }

    static Marshal(data: CAddRoleInAlchemy): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAddRoleInAlchemy;