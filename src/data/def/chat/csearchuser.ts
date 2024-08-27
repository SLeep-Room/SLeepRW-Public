
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSearchUser {
	Keyword : string;
}

class CSearchUser {
    static DefaultData: CSearchUser = {
	Keyword : "",
    }

    static Unmarshal(buffer: Buffer): CSearchUser { 
	const reader = new BufferReader(buffer)
try{
	CSearchUser.DefaultData.Keyword = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSearchUser.DefaultData);
    }

    static Marshal(data: CSearchUser): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.Keyword)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSearchUser;