
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSynchronizationCavernTask {
	id : number;
}

class CSynchronizationCavernTask {
    static DefaultData: CSynchronizationCavernTask = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CSynchronizationCavernTask { 
	const reader = new BufferReader(buffer)
try{
	CSynchronizationCavernTask.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSynchronizationCavernTask.DefaultData);
    }

    static Marshal(data: CSynchronizationCavernTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSynchronizationCavernTask;