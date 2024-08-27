
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshRoleGood {
	roleId : number;
	level : number;
	progress : number;
}

class SRefreshRoleGood {
    static DefaultData: SRefreshRoleGood = {
	roleId : 0,
	level : 0,
	progress : 0,
    }

    static Unmarshal(buffer: Buffer): SRefreshRoleGood { 
	const reader = new BufferReader(buffer)
try{
	SRefreshRoleGood.DefaultData.roleId = reader.readInt32()
	SRefreshRoleGood.DefaultData.level = reader.readInt32()
	SRefreshRoleGood.DefaultData.progress = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshRoleGood.DefaultData);
    }

    static Marshal(data: SRefreshRoleGood): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.progress)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshRoleGood;