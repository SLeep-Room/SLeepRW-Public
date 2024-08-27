
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CEraseNewRoleRedDot {
	roleId : number;
}

class CEraseNewRoleRedDot {
    static DefaultData: CEraseNewRoleRedDot = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CEraseNewRoleRedDot { 
	const reader = new BufferReader(buffer)
try{
	CEraseNewRoleRedDot.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CEraseNewRoleRedDot.DefaultData);
    }

    static Marshal(data: CEraseNewRoleRedDot): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CEraseNewRoleRedDot;