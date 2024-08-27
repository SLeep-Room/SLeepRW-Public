
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface STaskShopAct {
	activityId : number;
	leftTime : bigint;
	award : [number,number][];
}

class STaskShopAct {
    static DefaultData: STaskShopAct = {
	activityId : 0,
	leftTime : 0n,
	award : [],
    }

    static Unmarshal(buffer: Buffer): STaskShopAct { 
	const reader = new BufferReader(buffer)
try{
	STaskShopAct.DefaultData.activityId = reader.readInt32()
	STaskShopAct.DefaultData.leftTime = reader.readInt64()
	const awardLength = reader.readCompactUInt32();

	for (let i = 0; i < awardLength; i++) {
	    STaskShopAct.DefaultData.award.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},STaskShopAct.DefaultData);
    }

    static Marshal(data: STaskShopAct): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeCompactInt32(Object.keys(data.award).length);
	data.award.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default STaskShopAct;