
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRecordProcedure {
	procedure : number;
}

class SRecordProcedure {
    static DefaultData: SRecordProcedure = {
	procedure : 0,
    }

    static Unmarshal(buffer: Buffer): SRecordProcedure { 
	const reader = new BufferReader(buffer)
try{
	SRecordProcedure.DefaultData.procedure = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRecordProcedure.DefaultData);
    }

    static Marshal(data: SRecordProcedure): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.procedure)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRecordProcedure;