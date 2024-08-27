
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import train from '../../bean/yard/train';

interface SCompleteTrain {
	train : typeof train.DefaultData;
	index : number;
	resultType : number;
	result : string;
}

class SCompleteTrain {
    static DefaultData: SCompleteTrain = {
	train : train.DefaultData,
	index : 0,
	resultType : 0,
	result : "",
    }

    static Unmarshal(buffer: Buffer): SCompleteTrain { 
	const reader = new BufferReader(buffer)
try{
	SCompleteTrain.DefaultData.train = train.Unmarshal(reader)
	SCompleteTrain.DefaultData.index = reader.readInt32()
	SCompleteTrain.DefaultData.resultType = reader.readInt32()
	SCompleteTrain.DefaultData.result = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCompleteTrain.DefaultData);
    }

    static Marshal(data: SCompleteTrain): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(train.Marshal(data.train))
	buffer.writeInt32(data.index)
	buffer.writeInt32(data.resultType)
	buffer.writeString(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCompleteTrain;