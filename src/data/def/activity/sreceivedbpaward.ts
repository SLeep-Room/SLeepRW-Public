
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceivedBpAward {
	awardId : number;
}

class SReceivedBpAward {
    static DefaultData: SReceivedBpAward = {
	awardId : 0,
    }

    static Unmarshal(buffer: Buffer): SReceivedBpAward { 
	const reader = new BufferReader(buffer)
try{
	SReceivedBpAward.DefaultData.awardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceivedBpAward.DefaultData);
    }

    static Marshal(data: SReceivedBpAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.awardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceivedBpAward;