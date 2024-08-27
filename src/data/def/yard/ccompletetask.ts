
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCompleteTask {
	id : number;
}

class CCompleteTask {
    static DefaultData: CCompleteTask = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CCompleteTask { 
	const reader = new BufferReader(buffer)
try{
	CCompleteTask.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCompleteTask.DefaultData);
    }

    static Marshal(data: CCompleteTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCompleteTask;