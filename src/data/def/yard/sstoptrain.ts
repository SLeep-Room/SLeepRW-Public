
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSTopTrain {
	index : number;
}

class SSTopTrain {
    static DefaultData: SSTopTrain = {
	index : 0,
    }

    static Unmarshal(buffer: Buffer): SSTopTrain { 
	const reader = new BufferReader(buffer)
try{
	SSTopTrain.DefaultData.index = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSTopTrain.DefaultData);
    }

    static Marshal(data: SSTopTrain): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSTopTrain;