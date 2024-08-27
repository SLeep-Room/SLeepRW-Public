
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRoleBreak {
	roleId : number;
}

class CRoleBreak {
    static DefaultData: CRoleBreak = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CRoleBreak { 
	const reader = new BufferReader(buffer)
try{
	CRoleBreak.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRoleBreak.DefaultData);
    }

    static Marshal(data: CRoleBreak): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRoleBreak;