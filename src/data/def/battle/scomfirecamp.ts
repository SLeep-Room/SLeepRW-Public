
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SComfireCamp {
	camp : number;
}

class SComfireCamp {
    static DefaultData: SComfireCamp = {
	camp : 0,
    }

    static Unmarshal(buffer: Buffer): SComfireCamp { 
	const reader = new BufferReader(buffer)
try{
	SComfireCamp.DefaultData.camp = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SComfireCamp.DefaultData);
    }

    static Marshal(data: SComfireCamp): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.camp)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SComfireCamp;