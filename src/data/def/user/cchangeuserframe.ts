
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeUserFrame {
	frameId : number;
}

class CChangeUserFrame {
    static DefaultData: CChangeUserFrame = {
	frameId : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeUserFrame { 
	const reader = new BufferReader(buffer)
try{
	CChangeUserFrame.DefaultData.frameId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeUserFrame.DefaultData);
    }

    static Marshal(data: CChangeUserFrame): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.frameId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeUserFrame;