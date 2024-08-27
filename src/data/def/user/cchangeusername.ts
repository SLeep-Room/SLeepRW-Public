
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeUserName {
	name : string;
}

class CChangeUserName {
    static DefaultData: CChangeUserName = {
	name : "",
    }

    static Unmarshal(buffer: Buffer): CChangeUserName { 
	const reader = new BufferReader(buffer)
try{
	CChangeUserName.DefaultData.name = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeUserName.DefaultData);
    }

    static Marshal(data: CChangeUserName): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.name)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeUserName;