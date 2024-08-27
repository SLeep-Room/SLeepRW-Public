
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRefreshCavernTask {
	id : number;
}

class CRefreshCavernTask {
    static DefaultData: CRefreshCavernTask = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CRefreshCavernTask { 
	const reader = new BufferReader(buffer)
try{
	CRefreshCavernTask.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRefreshCavernTask.DefaultData);
    }

    static Marshal(data: CRefreshCavernTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRefreshCavernTask;