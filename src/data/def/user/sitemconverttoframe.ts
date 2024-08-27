
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SItemConvertToFrame {
	frameId : number;
}

class SItemConvertToFrame {
    static DefaultData: SItemConvertToFrame = {
	frameId : 0,
    }

    static Unmarshal(buffer: Buffer): SItemConvertToFrame { 
	const reader = new BufferReader(buffer)
try{
	SItemConvertToFrame.DefaultData.frameId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SItemConvertToFrame.DefaultData);
    }

    static Marshal(data: SItemConvertToFrame): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.frameId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SItemConvertToFrame;