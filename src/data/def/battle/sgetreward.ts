
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetReward {
	process : number[];
}

class SGetReward {
    static DefaultData: SGetReward = {
	process : [],
    }

    static Unmarshal(buffer: Buffer): SGetReward { 
	const reader = new BufferReader(buffer)
try{
	const processLength = reader.readCompactUInt32();

	for (let i = 0; i < processLength; i++) {
	    SGetReward.DefaultData.process.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetReward.DefaultData);
    }

    static Marshal(data: SGetReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.process).length);
	data.process.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetReward;