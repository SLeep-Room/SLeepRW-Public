
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveBeatClownReward {
	times : number;
}

class SReceiveBeatClownReward {
    static DefaultData: SReceiveBeatClownReward = {
	times : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveBeatClownReward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveBeatClownReward.DefaultData.times = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveBeatClownReward.DefaultData);
    }

    static Marshal(data: SReceiveBeatClownReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.times)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveBeatClownReward;