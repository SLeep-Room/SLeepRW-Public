
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import train from '../../bean/yard/train';

interface SRefreshTrain {
	index : number;
	train : typeof train.DefaultData;
}

class SRefreshTrain {
    static DefaultData: SRefreshTrain = {
	index : 0,
	train : train.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshTrain { 
	const reader = new BufferReader(buffer)
try{
	SRefreshTrain.DefaultData.index = reader.readInt32()
	SRefreshTrain.DefaultData.train = train.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshTrain.DefaultData);
    }

    static Marshal(data: SRefreshTrain): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)
	buffer.writeBuffer(train.Marshal(data.train))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshTrain;