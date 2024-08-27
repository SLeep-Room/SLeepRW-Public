
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRandomName {
	name : string;
}

class SRandomName {
    static DefaultData: SRandomName = {
	name : "",
    }

    static Unmarshal(buffer: Buffer): SRandomName { 
	const reader = new BufferReader(buffer)
try{
	SRandomName.DefaultData.name = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRandomName.DefaultData);
    }

    static Marshal(data: SRandomName): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.name)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRandomName;