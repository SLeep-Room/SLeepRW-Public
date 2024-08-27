
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import goodInfo from '../../bean/shop/mixgoodinfo';

interface SMiniDiscountActivityInfo {
	id : number;
	goodInfo : typeof goodInfo.DefaultData;
	leftTime : bigint;
	redDot : number;
}

class SMiniDiscountActivityInfo {
    static DefaultData: SMiniDiscountActivityInfo = {
	id : 0,
	goodInfo : goodInfo.DefaultData,
	leftTime : 0n,
	redDot : 0,
    }

    static Unmarshal(buffer: Buffer): SMiniDiscountActivityInfo { 
	const reader = new BufferReader(buffer)
try{
	SMiniDiscountActivityInfo.DefaultData.id = reader.readInt32()
	SMiniDiscountActivityInfo.DefaultData.goodInfo = goodInfo.Unmarshal(reader)
	SMiniDiscountActivityInfo.DefaultData.leftTime = reader.readInt64()
	SMiniDiscountActivityInfo.DefaultData.redDot = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SMiniDiscountActivityInfo.DefaultData);
    }

    static Marshal(data: SMiniDiscountActivityInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeBuffer(goodInfo.Marshal(data.goodInfo))
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt32(data.redDot)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SMiniDiscountActivityInfo;