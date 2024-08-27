
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveBeatClownReward {
	times : number;
}

class CReceiveBeatClownReward {
    static DefaultData: CReceiveBeatClownReward = {
	times : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveBeatClownReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveBeatClownReward.DefaultData.times = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveBeatClownReward.DefaultData);
    }

    static Marshal(data: CReceiveBeatClownReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.times)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveBeatClownReward;