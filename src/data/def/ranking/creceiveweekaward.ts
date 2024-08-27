
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveWeekAward {
	id : number;
	stageId : number;
}

class CReceiveWeekAward {
    static DefaultData: CReceiveWeekAward = {
	id : 0,
	stageId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveWeekAward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveWeekAward.DefaultData.id = reader.readInt32()
	CReceiveWeekAward.DefaultData.stageId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveWeekAward.DefaultData);
    }

    static Marshal(data: CReceiveWeekAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.stageId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveWeekAward;