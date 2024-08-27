
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SStartGuide {
	guide : number;
}

class SStartGuide {
    static DefaultData: SStartGuide = {
	guide : 0,
    }

    static Unmarshal(buffer: Buffer): SStartGuide { 
	const reader = new BufferReader(buffer)
try{
	SStartGuide.DefaultData.guide = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SStartGuide.DefaultData);
    }

    static Marshal(data: SStartGuide): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.guide)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SStartGuide;