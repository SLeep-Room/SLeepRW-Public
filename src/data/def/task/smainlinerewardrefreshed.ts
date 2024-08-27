
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import mainLineRewardStates from '../../bean/task/mainlinerewardinfo';

interface SMainLineRewardRefreshed {
	mainLineRewardStates : typeof mainLineRewardStates.DefaultData[];
}

class SMainLineRewardRefreshed {
    static DefaultData: SMainLineRewardRefreshed = {
	mainLineRewardStates : [],
    }

    static Unmarshal(buffer: Buffer): SMainLineRewardRefreshed { 
	const reader = new BufferReader(buffer)
try{
	const mainLineRewardStatesLength = reader.readCompactUInt32();

	for (let i = 0; i < mainLineRewardStatesLength; i++) {
	    SMainLineRewardRefreshed.DefaultData.mainLineRewardStates.push(mainLineRewardStates.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SMainLineRewardRefreshed.DefaultData);
    }

    static Marshal(data: SMainLineRewardRefreshed): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.mainLineRewardStates).length);
	data.mainLineRewardStates.forEach((value) => {
		buffer.writeBuffer(mainLineRewardStates.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SMainLineRewardRefreshed;