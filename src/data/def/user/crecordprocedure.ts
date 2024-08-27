
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRecordProcedure {
	procedure : number;
}

class CRecordProcedure {
    static DefaultData: CRecordProcedure = {
	procedure : 0,
    }

    static Unmarshal(buffer: Buffer): CRecordProcedure { 
	const reader = new BufferReader(buffer)
try{
	CRecordProcedure.DefaultData.procedure = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecordProcedure.DefaultData);
    }

    static Marshal(data: CRecordProcedure): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.procedure)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecordProcedure;