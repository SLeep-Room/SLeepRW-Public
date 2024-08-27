
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SConfirmEntries {
	score : number;
}

class SConfirmEntries {
    static DefaultData: SConfirmEntries = {
	score : 0,
    }

    static Unmarshal(buffer: Buffer): SConfirmEntries { 
	const reader = new BufferReader(buffer)
try{
	SConfirmEntries.DefaultData.score = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SConfirmEntries.DefaultData);
    }

    static Marshal(data: SConfirmEntries): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.score)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SConfirmEntries;