
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ExploreAwardRecord {
	id : number;
	key : number;
	num : number;
	way : number;
}

class ExploreAwardRecord {
    static DefaultData: ExploreAwardRecord = {
	id : 0,
	key : 0,
	num : 0,
	way : 0,
    }

    static Unmarshal(buffer: BufferReader): ExploreAwardRecord { 
	const reader = buffer
try{
	ExploreAwardRecord.DefaultData.id = reader.readInt32()
	ExploreAwardRecord.DefaultData.key = reader.readInt32()
	ExploreAwardRecord.DefaultData.num = reader.readInt32()
	ExploreAwardRecord.DefaultData.way = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ExploreAwardRecord.DefaultData);
    }

    static Marshal(data: ExploreAwardRecord): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.key)
	buffer.writeInt32(data.num)
	buffer.writeInt32(data.way)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ExploreAwardRecord;