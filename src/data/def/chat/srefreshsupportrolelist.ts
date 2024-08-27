
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import rolesFromFriends from '../../bean/chat/supportroleforshow';
import rolesFromStrangers from '../../bean/chat/strangersupportroleforshow';

interface SRefreshSupportRoleList {
	rolesFromFriends : [bigint,typeof rolesFromFriends.DefaultData][];
	rolesFromStrangers : typeof rolesFromStrangers.DefaultData[];
}

class SRefreshSupportRoleList {
    static DefaultData: SRefreshSupportRoleList = {
	rolesFromFriends : [],
	rolesFromStrangers : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshSupportRoleList { 
	const reader = new BufferReader(buffer)
try{
	const rolesFromFriendsLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesFromFriendsLength; i++) {
	    SRefreshSupportRoleList.DefaultData.rolesFromFriends.push([reader.readInt64(),rolesFromFriends.Unmarshal(reader)]);
	}
	const rolesFromStrangersLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesFromStrangersLength; i++) {
	    SRefreshSupportRoleList.DefaultData.rolesFromStrangers.push(rolesFromStrangers.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshSupportRoleList.DefaultData);
    }

    static Marshal(data: SRefreshSupportRoleList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.rolesFromFriends).length);
	data.rolesFromFriends.forEach(([key, value]) => {
		buffer.writeInt64(BigInt(key))
		buffer.writeBuffer(rolesFromFriends.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.rolesFromStrangers).length);
	data.rolesFromStrangers.forEach((value) => {
		buffer.writeBuffer(rolesFromStrangers.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshSupportRoleList;