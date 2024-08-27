
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import users from '../../bean/chat/otheruserinfo';

interface SSearchUser {
	users : typeof users.DefaultData;
}

class SSearchUser {
    static DefaultData: SSearchUser = {
	users : users.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SSearchUser { 
	const reader = new BufferReader(buffer)
try{
	SSearchUser.DefaultData.users = users.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSearchUser.DefaultData);
    }

    static Marshal(data: SSearchUser): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(users.Marshal(data.users))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSearchUser;