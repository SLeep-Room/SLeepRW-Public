
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import users from '../../bean/chat/otheruserinfo';

interface SOpenInviteeList {
	users : typeof users.DefaultData[];
	limitNum : number;
}

class SOpenInviteeList {
    static DefaultData: SOpenInviteeList = {
	users : [],
	limitNum : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenInviteeList { 
	const reader = new BufferReader(buffer)
try{
	const usersLength = reader.readCompactUInt32();

	for (let i = 0; i < usersLength; i++) {
	    SOpenInviteeList.DefaultData.users.push(users.Unmarshal(reader));
	}
	SOpenInviteeList.DefaultData.limitNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenInviteeList.DefaultData);
    }

    static Marshal(data: SOpenInviteeList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.users).length);
	data.users.forEach((value) => {
		buffer.writeBuffer(users.Marshal(value))
	});
	buffer.writeInt32(data.limitNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenInviteeList;