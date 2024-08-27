
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SDrawCardNumsBurnOut {
	kind : number;
}

class SDrawCardNumsBurnOut {
    static DefaultData: SDrawCardNumsBurnOut = {
	kind : 0,
    }

    static Unmarshal(buffer: Buffer): SDrawCardNumsBurnOut { 
	const reader = new BufferReader(buffer)
try{
	SDrawCardNumsBurnOut.DefaultData.kind = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDrawCardNumsBurnOut.DefaultData);
    }

    static Marshal(data: SDrawCardNumsBurnOut): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.kind)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDrawCardNumsBurnOut;