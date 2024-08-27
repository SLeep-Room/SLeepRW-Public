
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import user from '../../bean/chat/otheruserinfo';

interface SRefreshFriendInfos {
	user : typeof user.DefaultData[];
}

class SRefreshFriendInfos {
    static DefaultData: SRefreshFriendInfos = {
	user : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshFriendInfos { 
	const reader = new BufferReader(buffer)
try{
	const userLength = reader.readCompactUInt32();

	for (let i = 0; i < userLength; i++) {
	    SRefreshFriendInfos.DefaultData.user.push(user.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshFriendInfos.DefaultData);
    }

    static Marshal(data: SRefreshFriendInfos): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.user).length);
	data.user.forEach((value) => {
		buffer.writeBuffer(user.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshFriendInfos;