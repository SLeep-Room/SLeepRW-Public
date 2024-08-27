
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CComfireCamp {
	camp : number;
}

class CComfireCamp {
    static DefaultData: CComfireCamp = {
	camp : 0,
    }

    static Unmarshal(buffer: Buffer): CComfireCamp { 
	const reader = new BufferReader(buffer)
try{
	CComfireCamp.DefaultData.camp = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CComfireCamp.DefaultData);
    }

    static Marshal(data: CComfireCamp): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.camp)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CComfireCamp;