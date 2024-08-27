
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRecordTaskChoice {
	taskid : number;
	choice : string;
}

class CRecordTaskChoice {
    static DefaultData: CRecordTaskChoice = {
	taskid : 0,
	choice : "",
    }

    static Unmarshal(buffer: Buffer): CRecordTaskChoice { 
	const reader = new BufferReader(buffer)
try{
	CRecordTaskChoice.DefaultData.taskid = reader.readInt32()
	CRecordTaskChoice.DefaultData.choice = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecordTaskChoice.DefaultData);
    }

    static Marshal(data: CRecordTaskChoice): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.taskid)
	buffer.writeString(data.choice)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecordTaskChoice;