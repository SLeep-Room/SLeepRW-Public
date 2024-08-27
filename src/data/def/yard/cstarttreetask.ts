
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStartTreeTask {
	buildId : number;
}

class CStartTreeTask {
    static DefaultData: CStartTreeTask = {
	buildId : 0,
    }

    static Unmarshal(buffer: Buffer): CStartTreeTask { 
	const reader = new BufferReader(buffer)
try{
	CStartTreeTask.DefaultData.buildId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStartTreeTask.DefaultData);
    }

    static Marshal(data: CStartTreeTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.buildId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStartTreeTask;