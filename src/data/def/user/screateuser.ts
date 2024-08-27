
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCreateUser {
	username : string;
}

class SCreateUser {
    static DefaultData: SCreateUser = {
	username : "",
    }

    static Unmarshal(buffer: Buffer): SCreateUser { 
	const reader = new BufferReader(buffer)
try{
	SCreateUser.DefaultData.username = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCreateUser.DefaultData);
    }

    static Marshal(data: SCreateUser): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.username)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCreateUser;