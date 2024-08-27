
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRoleUpdateLv {
	roleId : number;
	level : number;
	exp : bigint;
}

class SRoleUpdateLv {
    static DefaultData: SRoleUpdateLv = {
	roleId : 0,
	level : 0,
	exp : 0n,
    }

    static Unmarshal(buffer: Buffer): SRoleUpdateLv { 
	const reader = new BufferReader(buffer)
try{
	SRoleUpdateLv.DefaultData.roleId = reader.readInt32()
	SRoleUpdateLv.DefaultData.level = reader.readInt16()
	SRoleUpdateLv.DefaultData.exp = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleUpdateLv.DefaultData);
    }

    static Marshal(data: SRoleUpdateLv): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt16(data.level)
	buffer.writeInt64(BigInt(data.exp))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleUpdateLv;