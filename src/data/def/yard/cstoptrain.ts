
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStopTrain {
	index : number;
}

class CStopTrain {
    static DefaultData: CStopTrain = {
	index : 0,
    }

    static Unmarshal(buffer: Buffer): CStopTrain { 
	const reader = new BufferReader(buffer)
try{
	CStopTrain.DefaultData.index = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStopTrain.DefaultData);
    }

    static Marshal(data: CStopTrain): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStopTrain;