
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ScoreReward {
	receiveAward : number[];
	score : number;
}

class ScoreReward {
    static DefaultData: ScoreReward = {
	receiveAward : [],
	score : 0,
    }

    static Unmarshal(buffer: BufferReader): ScoreReward { 
	const reader = buffer
try{
	const receiveAwardLength = reader.readCompactUInt32();

	for (let i = 0; i < receiveAwardLength; i++) {
	    ScoreReward.DefaultData.receiveAward.push(reader.readInt32());
	}
	ScoreReward.DefaultData.score = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ScoreReward.DefaultData);
    }

    static Marshal(data: ScoreReward): Buffer { 
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


export default ScoreReward;