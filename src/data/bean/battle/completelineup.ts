
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import roles from '../../bean/ranking/role';

interface CompleteLineup {
	userId : bigint;
	userName : string;
	userLv : number;
	avatarId : number;
	frameId : number;
	roles : [number,typeof roles.DefaultData][];
}

class CompleteLineup {
    static DefaultData: CompleteLineup = {
	userId : 0n,
	userName : "",
	userLv : 0,
	avatarId : 0,
	frameId : 0,
	roles : [],
    }

    static Unmarshal(buffer: BufferReader): CompleteLineup { 
	const reader = buffer
try{
	CompleteLineup.DefaultData.userId = reader.readInt64()
	CompleteLineup.DefaultData.userName = reader.readString()
	CompleteLineup.DefaultData.userLv = reader.readInt32()
	CompleteLineup.DefaultData.avatarId = reader.readInt32()
	CompleteLineup.DefaultData.frameId = reader.readInt32()
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    CompleteLineup.DefaultData.roles.push([reader.readInt32(),roles.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CompleteLineup.DefaultData);
    }

    static Marshal(data: CompleteLineup): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeString(data.userName)
	buffer.writeInt32(data.userLv)
	buffer.writeInt32(data.avatarId)
	buffer.writeInt32(data.frameId)
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(roles.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CompleteLineup;