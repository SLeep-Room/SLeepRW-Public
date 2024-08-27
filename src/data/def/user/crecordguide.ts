
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRecordGuide {
	guide : number;
}

class CRecordGuide {
    static DefaultData: CRecordGuide = {
	guide : 0,
    }

    static Unmarshal(buffer: Buffer): CRecordGuide { 
	const reader = new BufferReader(buffer)
try{
	CRecordGuide.DefaultData.guide = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecordGuide.DefaultData);
    }

    static Marshal(data: CRecordGuide): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.guide)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecordGuide;