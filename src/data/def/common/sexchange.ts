
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SExchange {
	secretKey : string;
}

class SExchange {
    static DefaultData: SExchange = {
	secretKey : "",
    }

    static Unmarshal(buffer: Buffer): SExchange { 
	const reader = new BufferReader(buffer)
try{
	SExchange.DefaultData.secretKey = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SExchange.DefaultData);
    }

    static Marshal(data: SExchange): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.secretKey)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SExchange;