
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SActive {
	result : number;
}

class SActive {
    static DefaultData: SActive = {
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SActive { 
	const reader = new BufferReader(buffer)
try{
	SActive.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SActive.DefaultData);
    }

    static Marshal(data: SActive): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SActive;