
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSignCrossDay {
	activityId : number;
}

class SSignCrossDay {
    static DefaultData: SSignCrossDay = {
	activityId : 0,
    }

    static Unmarshal(buffer: Buffer): SSignCrossDay { 
	const reader = new BufferReader(buffer)
try{
	SSignCrossDay.DefaultData.activityId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSignCrossDay.DefaultData);
    }

    static Marshal(data: SSignCrossDay): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSignCrossDay;