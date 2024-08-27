
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface DeadRole {
	roleId : number;
	hurtExtent : number;
	repairTime : bigint;
	reviveTime : bigint;
}

class DeadRole {
    static DefaultData: DeadRole = {
	roleId : 0,
	hurtExtent : 0,
	repairTime : 0n,
	reviveTime : 0n,
    }

    static Unmarshal(buffer: BufferReader): DeadRole { 
	const reader = buffer
try{
	DeadRole.DefaultData.roleId = reader.readInt32()
	DeadRole.DefaultData.hurtExtent = reader.readInt16()
	DeadRole.DefaultData.repairTime = reader.readInt64()
	DeadRole.DefaultData.reviveTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DeadRole.DefaultData);
    }

    static Marshal(data: DeadRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt16(data.hurtExtent)
	buffer.writeInt64(BigInt(data.repairTime))
	buffer.writeInt64(BigInt(data.reviveTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DeadRole;