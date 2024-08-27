
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import user from '../../bean/chat/otheruserinfo';

interface SAddUser {
	user : typeof user.DefaultData;
}

class SAddUser {
    static DefaultData: SAddUser = {
	user : user.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SAddUser { 
	const reader = new BufferReader(buffer)
try{
	SAddUser.DefaultData.user = user.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddUser.DefaultData);
    }

    static Marshal(data: SAddUser): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(user.Marshal(data.user))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAddUser;