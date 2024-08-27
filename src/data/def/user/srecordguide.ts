
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRecordGuide {
	guide : number;
}

class SRecordGuide {
    static DefaultData: SRecordGuide = {
	guide : 0,
    }

    static Unmarshal(buffer: Buffer): SRecordGuide { 
	const reader = new BufferReader(buffer)
try{
	SRecordGuide.DefaultData.guide = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRecordGuide.DefaultData);
    }

    static Marshal(data: SRecordGuide): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.guide)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRecordGuide;