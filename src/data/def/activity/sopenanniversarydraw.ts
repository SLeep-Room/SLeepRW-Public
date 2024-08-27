
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenAnniversaryDraw {
	award : [number,number][];
	score : number;
	leftTime : bigint;
}

class SOpenAnniversaryDraw {
    static DefaultData: SOpenAnniversaryDraw = {
	award : [],
	score : 0,
	leftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SOpenAnniversaryDraw { 
	const reader = new BufferReader(buffer)
try{
	const awardLength = reader.readCompactUInt32();

	for (let i = 0; i < awardLength; i++) {
	    SOpenAnniversaryDraw.DefaultData.award.push([reader.readInt32(),reader.readInt32()]);
	}
	SOpenAnniversaryDraw.DefaultData.score = reader.readInt32()
	SOpenAnniversaryDraw.DefaultData.leftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenAnniversaryDraw.DefaultData);
    }

    static Marshal(data: SOpenAnniversaryDraw): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.award).length);
	data.award.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.score)
	buffer.writeInt64(BigInt(data.leftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenAnniversaryDraw;