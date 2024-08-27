
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSalt {
	salt : string;
	open : number;
}

class SSalt {
    static DefaultData: SSalt = {
	salt : "",
	open : 0,
    }

    static Unmarshal(buffer: Buffer): SSalt { 
	const reader = new BufferReader(buffer)
try{
	SSalt.DefaultData.salt = reader.readString()
	SSalt.DefaultData.open = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSalt.DefaultData);
    }

    static Marshal(data: SSalt): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.salt)
	buffer.writeInt32(data.open)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSalt;