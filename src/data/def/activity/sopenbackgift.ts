
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import goodInfo from '../../bean/activity/goodinfo';

interface SOpenBackGift {
	leftTime : bigint;
	goodInfo : typeof goodInfo.DefaultData;
}

class SOpenBackGift {
    static DefaultData: SOpenBackGift = {
	leftTime : 0n,
	goodInfo : goodInfo.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SOpenBackGift { 
	const reader = new BufferReader(buffer)
try{
	SOpenBackGift.DefaultData.leftTime = reader.readInt64()
	SOpenBackGift.DefaultData.goodInfo = goodInfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenBackGift.DefaultData);
    }

    static Marshal(data: SOpenBackGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeBuffer(goodInfo.Marshal(data.goodInfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenBackGift;