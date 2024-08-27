
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import train from '../../bean/yard/train';

interface SArriveTrainTime {
	index : number;
	train : typeof train.DefaultData;
}

class SArriveTrainTime {
    static DefaultData: SArriveTrainTime = {
	index : 0,
	train : train.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SArriveTrainTime { 
	const reader = new BufferReader(buffer)
try{
	SArriveTrainTime.DefaultData.index = reader.readInt32()
	SArriveTrainTime.DefaultData.train = train.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SArriveTrainTime.DefaultData);
    }

    static Marshal(data: SArriveTrainTime): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)
	buffer.writeBuffer(train.Marshal(data.train))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SArriveTrainTime;