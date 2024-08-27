
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import goodInfo from '../../bean/activity/goodinfo';

interface SOpenBackPack {
	allSpirt : number;
	leftTime : bigint;
	spirtLimit : number[];
	goodInfo : typeof goodInfo.DefaultData[];
}

class SOpenBackPack {
    static DefaultData: SOpenBackPack = {
	allSpirt : 0,
	leftTime : 0n,
	spirtLimit : [],
	goodInfo : [],
    }

    static Unmarshal(buffer: Buffer): SOpenBackPack { 
	const reader = new BufferReader(buffer)
try{
	SOpenBackPack.DefaultData.allSpirt = reader.readInt32()
	SOpenBackPack.DefaultData.leftTime = reader.readInt64()
	const spirtLimitLength = reader.readCompactUInt32();

	for (let i = 0; i < spirtLimitLength; i++) {
	    SOpenBackPack.DefaultData.spirtLimit.push(reader.readInt32());
	}
	const goodInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < goodInfoLength; i++) {
	    SOpenBackPack.DefaultData.goodInfo.push(goodInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenBackPack.DefaultData);
    }

    static Marshal(data: SOpenBackPack): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.allSpirt)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeCompactInt32(Object.keys(data.spirtLimit).length);
	data.spirtLimit.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.goodInfo).length);
	data.goodInfo.forEach((value) => {
		buffer.writeBuffer(goodInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenBackPack;