
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SShopPoints {
	level : number;
	score : number;
	totalScore : number;
	reward : number[];
}

class SShopPoints {
    static DefaultData: SShopPoints = {
	level : 0,
	score : 0,
	totalScore : 0,
	reward : [],
    }

    static Unmarshal(buffer: Buffer): SShopPoints { 
	const reader = new BufferReader(buffer)
try{
	SShopPoints.DefaultData.level = reader.readInt32()
	SShopPoints.DefaultData.score = reader.readInt32()
	SShopPoints.DefaultData.totalScore = reader.readInt32()
	const rewardLength = reader.readCompactUInt32();

	for (let i = 0; i < rewardLength; i++) {
	    SShopPoints.DefaultData.reward.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShopPoints.DefaultData);
    }

    static Marshal(data: SShopPoints): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.score)
	buffer.writeInt32(data.totalScore)
	buffer.writeCompactInt32(Object.keys(data.reward).length);
	data.reward.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShopPoints;