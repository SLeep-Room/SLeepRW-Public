
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import train from '../../bean/yard/train';

interface SStartTrain {
	index : number;
	train : typeof train.DefaultData;
}

class SStartTrain {
    static DefaultData: SStartTrain = {
	index : 0,
	train : train.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SStartTrain { 
	const reader = new BufferReader(buffer)
try{
	SStartTrain.DefaultData.index = reader.readInt32()
	SStartTrain.DefaultData.train = train.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SStartTrain.DefaultData);
    }

    static Marshal(data: SStartTrain): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)
	buffer.writeBuffer(train.Marshal(data.train))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SStartTrain;