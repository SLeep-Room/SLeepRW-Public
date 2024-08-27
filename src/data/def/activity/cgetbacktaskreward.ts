
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetBackTaskReward {
	goodId : number;
}

class CGetBackTaskReward {
    static DefaultData: CGetBackTaskReward = {
	goodId : 0,
    }

    static Unmarshal(buffer: Buffer): CGetBackTaskReward { 
	const reader = new BufferReader(buffer)
try{
	CGetBackTaskReward.DefaultData.goodId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetBackTaskReward.DefaultData);
    }

    static Marshal(data: CGetBackTaskReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.goodId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetBackTaskReward;