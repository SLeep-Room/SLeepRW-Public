
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import role from '../../bean/login/role';
import user from '../../bean/chat/otheruserinfo';

interface SupportRole {
	role : typeof role.DefaultData;
	user : typeof user.DefaultData;
}

class SupportRole {
    static DefaultData: SupportRole = {
	role : role.DefaultData,
	user : user.DefaultData,
    }

    static Unmarshal(buffer: BufferReader): SupportRole { 
	const reader = buffer
try{
	SupportRole.DefaultData.role = role.Unmarshal(reader)
	SupportRole.DefaultData.user = user.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SupportRole.DefaultData);
    }

    static Marshal(data: SupportRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(role.Marshal(data.role))
	buffer.writeBuffer(user.Marshal(data.user))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SupportRole;