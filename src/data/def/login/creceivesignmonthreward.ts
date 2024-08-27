
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveSignMonthReward {
	signNum : number;
}

class CReceiveSignMonthReward {
    static DefaultData: CReceiveSignMonthReward = {
	signNum : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveSignMonthReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveSignMonthReward.DefaultData.signNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveSignMonthReward.DefaultData);
    }

    static Marshal(data: CReceiveSignMonthReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.signNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveSignMonthReward;