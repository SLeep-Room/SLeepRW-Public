
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import awards from '../../bean/activity/unlockitem';

interface ConsumptionAward {
	awards : typeof awards.DefaultData[];
	status : number;
}

class ConsumptionAward {
    static DefaultData: ConsumptionAward = {
	awards : [],
	status : 0,
    }

    static Unmarshal(buffer: BufferReader): ConsumptionAward { 
	const reader = buffer
try{
	const awardsLength = reader.readCompactUInt32();

	for (let i = 0; i < awardsLength; i++) {
	    ConsumptionAward.DefaultData.awards.push(awards.Unmarshal(reader));
	}
	ConsumptionAward.DefaultData.status = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ConsumptionAward.DefaultData);
    }

    static Marshal(data: ConsumptionAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.awards).length);
	data.awards.forEach((value) => {
		buffer.writeBuffer(awards.Marshal(value))
	});
	buffer.writeInt32(data.status)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ConsumptionAward;