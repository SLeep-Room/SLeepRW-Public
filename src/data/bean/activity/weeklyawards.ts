
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface WeeklyAwards {
	id : number;
	awardStatus : number;
}

class WeeklyAwards {
    static DefaultData: WeeklyAwards = {
	id : 0,
	awardStatus : 0,
    }

    static Unmarshal(buffer: BufferReader): WeeklyAwards { 
	const reader = buffer
try{
	WeeklyAwards.DefaultData.id = reader.readInt32()
	WeeklyAwards.DefaultData.awardStatus = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},WeeklyAwards.DefaultData);
    }

    static Marshal(data: WeeklyAwards): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.awardStatus)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default WeeklyAwards;