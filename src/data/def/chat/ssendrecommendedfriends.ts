
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import users from '../../bean/chat/otheruserinfo';

interface SSendRecommendedFriends {
	users : typeof users.DefaultData[];
}

class SSendRecommendedFriends {
    static DefaultData: SSendRecommendedFriends = {
	users : [],
    }

    static Unmarshal(buffer: Buffer): SSendRecommendedFriends { 
	const reader = new BufferReader(buffer)
try{
	const usersLength = reader.readCompactUInt32();

	for (let i = 0; i < usersLength; i++) {
	    SSendRecommendedFriends.DefaultData.users.push(users.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendRecommendedFriends.DefaultData);
    }

    static Marshal(data: SSendRecommendedFriends): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.users).length);
	data.users.forEach((value) => {
		buffer.writeBuffer(users.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendRecommendedFriends;