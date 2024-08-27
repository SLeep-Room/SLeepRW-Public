
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveWeekActives {
	value : number;
}

class CReceiveWeekActives {
    static DefaultData: CReceiveWeekActives = {
	value : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveWeekActives { 
	const reader = new BufferReader(buffer)
try{
	CReceiveWeekActives.DefaultData.value = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveWeekActives.DefaultData);
    }

    static Marshal(data: CReceiveWeekActives): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.value)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveWeekActives;