
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CArriveTrainTime {
	index : number;
}

class CArriveTrainTime {
    static DefaultData: CArriveTrainTime = {
	index : 0,
    }

    static Unmarshal(buffer: Buffer): CArriveTrainTime { 
	const reader = new BufferReader(buffer)
try{
	CArriveTrainTime.DefaultData.index = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CArriveTrainTime.DefaultData);
    }

    static Marshal(data: CArriveTrainTime): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CArriveTrainTime;