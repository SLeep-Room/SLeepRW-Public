
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSevenDayPopGIft {
	pop : number;
	hasBought : number;
	rewards : [number,number][];
	leftTime : bigint;
	goodId : number;
}

class SSevenDayPopGIft {
    static DefaultData: SSevenDayPopGIft = {
	pop : 0,
	hasBought : 0,
	rewards : [],
	leftTime : 0n,
	goodId : 0,
    }

    static Unmarshal(buffer: Buffer): SSevenDayPopGIft { 
	const reader = new BufferReader(buffer)
try{
	SSevenDayPopGIft.DefaultData.pop = reader.readInt32()
	SSevenDayPopGIft.DefaultData.hasBought = reader.readInt32()
	const rewardsLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardsLength; i++) {
	    SSevenDayPopGIft.DefaultData.rewards.push([reader.readInt32(),reader.readInt32()]);
	}
	SSevenDayPopGIft.DefaultData.leftTime = reader.readInt64()
	SSevenDayPopGIft.DefaultData.goodId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSevenDayPopGIft.DefaultData);
    }

    static Marshal(data: SSevenDayPopGIft): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.pop)
	buffer.writeInt32(data.hasBought)
	buffer.writeCompactInt32(Object.keys(data.rewards).length);
	data.rewards.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt32(data.goodId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSevenDayPopGIft;