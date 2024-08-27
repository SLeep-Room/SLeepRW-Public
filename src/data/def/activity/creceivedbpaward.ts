
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceivedBpAward {
	awardId : number;
}

class CReceivedBpAward {
    static DefaultData: CReceivedBpAward = {
	awardId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceivedBpAward { 
	const reader = new BufferReader(buffer)
try{
	CReceivedBpAward.DefaultData.awardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceivedBpAward.DefaultData);
    }

    static Marshal(data: CReceivedBpAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.awardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceivedBpAward;