
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface PassedPointsReward {
	passedPointsSum : number;
	received : number;
}

class PassedPointsReward {
    static DefaultData: PassedPointsReward = {
	passedPointsSum : 0,
	received : 0,
    }

    static Unmarshal(buffer: BufferReader): PassedPointsReward { 
	const reader = buffer
try{
	PassedPointsReward.DefaultData.passedPointsSum = reader.readInt32()
	PassedPointsReward.DefaultData.received = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},PassedPointsReward.DefaultData);
    }

    static Marshal(data: PassedPointsReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.passedPointsSum)
	buffer.writeInt32(data.received)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default PassedPointsReward;