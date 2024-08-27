
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeUserName {
	name : string;
}

class SChangeUserName {
    static DefaultData: SChangeUserName = {
	name : "",
    }

    static Unmarshal(buffer: Buffer): SChangeUserName { 
	const reader = new BufferReader(buffer)
try{
	SChangeUserName.DefaultData.name = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeUserName.DefaultData);
    }

    static Marshal(data: SChangeUserName): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.name)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeUserName;