
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface TotalSignAward {
	itemId : number;
	num : number;
	signTimes : number;
}

class TotalSignAward {
    static DefaultData: TotalSignAward = {
	itemId : 0,
	num : 0,
	signTimes : 0,
    }

    static Unmarshal(buffer: BufferReader): TotalSignAward { 
	const reader = buffer
try{
	TotalSignAward.DefaultData.itemId = reader.readInt32()
	TotalSignAward.DefaultData.num = reader.readInt32()
	TotalSignAward.DefaultData.signTimes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},TotalSignAward.DefaultData);
    }

    static Marshal(data: TotalSignAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.num)
	buffer.writeInt32(data.signTimes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default TotalSignAward;