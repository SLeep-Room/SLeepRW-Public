
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CExchange {
	secretKeyInMD5 : string;
}

class CExchange {
    static DefaultData: CExchange = {
	secretKeyInMD5 : "",
    }

    static Unmarshal(buffer: Buffer): CExchange { 
	const reader = new BufferReader(buffer)
try{
	CExchange.DefaultData.secretKeyInMD5 = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CExchange.DefaultData);
    }

    static Marshal(data: CExchange): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.secretKeyInMD5)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CExchange;