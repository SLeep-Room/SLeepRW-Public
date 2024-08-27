
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeUserFrame {
	frameId : number;
}

class SChangeUserFrame {
    static DefaultData: SChangeUserFrame = {
	frameId : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeUserFrame { 
	const reader = new BufferReader(buffer)
try{
	SChangeUserFrame.DefaultData.frameId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeUserFrame.DefaultData);
    }

    static Marshal(data: SChangeUserFrame): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.frameId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeUserFrame;