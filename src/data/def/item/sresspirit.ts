
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SResSpirit {
	spirit : number;
	strengthLimit : number;
	leftTime : bigint;
	recoverTimes : [number,number][];
}

class SResSpirit {
    static DefaultData: SResSpirit = {
	spirit : 0,
	strengthLimit : 0,
	leftTime : 0n,
	recoverTimes : [],
    }

    static Unmarshal(buffer: Buffer): SResSpirit { 
	const reader = new BufferReader(buffer)
try{
	SResSpirit.DefaultData.spirit = reader.readInt32()
	SResSpirit.DefaultData.strengthLimit = reader.readInt32()
	SResSpirit.DefaultData.leftTime = reader.readInt64()
	const recoverTimesLength = reader.readCompactUInt32();

	for (let i = 0; i < recoverTimesLength; i++) {
	    SResSpirit.DefaultData.recoverTimes.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SResSpirit.DefaultData);
    }

    static Marshal(data: SResSpirit): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.spirit)
	buffer.writeInt32(data.strengthLimit)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeCompactInt32(Object.keys(data.recoverTimes).length);
	data.recoverTimes.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SResSpirit;