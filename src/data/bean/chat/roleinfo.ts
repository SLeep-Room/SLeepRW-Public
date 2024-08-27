
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface RoleInfo {
	roleId : number;
	roleLv : number;
	breakLv : number;
	skin : number;
}

class RoleInfo {
    static DefaultData: RoleInfo = {
	roleId : 0,
	roleLv : 0,
	breakLv : 0,
	skin : 0,
    }

    static Unmarshal(buffer: BufferReader): RoleInfo { 
	const reader = buffer
try{
	RoleInfo.DefaultData.roleId = reader.readInt32()
	RoleInfo.DefaultData.roleLv = reader.readInt32()
	RoleInfo.DefaultData.breakLv = reader.readInt16()
	RoleInfo.DefaultData.skin = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},RoleInfo.DefaultData);
    }

    static Marshal(data: RoleInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.roleLv)
	buffer.writeInt16(data.breakLv)
	buffer.writeInt32(data.skin)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default RoleInfo;