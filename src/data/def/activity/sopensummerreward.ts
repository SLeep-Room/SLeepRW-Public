
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenSummerReward {
	receiveAward : number[];
	score : number;
}

class SOpenSummerReward {
    static DefaultData: SOpenSummerReward = {
	receiveAward : [],
	score : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenSummerReward { 
	const reader = new BufferReader(buffer)
try{
	const receiveAwardLength = reader.readCompactUInt32();

	for (let i = 0; i < receiveAwardLength; i++) {
	    SOpenSummerReward.DefaultData.receiveAward.push(reader.readInt32());
	}
	SOpenSummerReward.DefaultData.score = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenSummerReward.DefaultData);
    }

    static Marshal(data: SOpenSummerReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.receiveAward).length);
	data.receiveAward.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.score)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenSummerReward;