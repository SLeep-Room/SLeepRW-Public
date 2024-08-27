
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCreateUser {
	name : string;
}

class CCreateUser {
    static DefaultData: CCreateUser = {
	name : "",
    }

    static Unmarshal(buffer: Buffer): CCreateUser { 
	const reader = new BufferReader(buffer)
try{
	CCreateUser.DefaultData.name = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCreateUser.DefaultData);
    }

    static Marshal(data: CCreateUser): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.name)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCreateUser;