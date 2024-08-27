
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveSevenDayPopGift {
	rewardId : number;
}

class CReceiveSevenDayPopGift {
    static DefaultData: CReceiveSevenDayPopGift = {
	rewardId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveSevenDayPopGift { 
	const reader = new BufferReader(buffer)
try{
	CReceiveSevenDayPopGift.DefaultData.rewardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveSevenDayPopGift.DefaultData);
    }

    static Marshal(data: CReceiveSevenDayPopGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveSevenDayPopGift;