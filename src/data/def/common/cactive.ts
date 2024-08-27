
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CActive {
	code : string;
}

class CActive {
    static DefaultData: CActive = {
	code : "",
    }

    static Unmarshal(buffer: Buffer): CActive { 
	const reader = new BufferReader(buffer)
try{
	CActive.DefaultData.code = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CActive.DefaultData);
    }

    static Marshal(data: CActive): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.code)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CActive;